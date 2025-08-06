const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking');
const nodemailer = require('nodemailer');

// Email configuration (you'll need to set up environment variables)
const emailTransporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// GET /api/bookings - Get all bookings (admin only)
router.get('/', async (req, res) => {
  try {
    const { page = 1, limit = 10, status, startDate, endDate } = req.query;
    
    let filter = {};
    if (status) filter.status = status;
    if (startDate && endDate) {
      filter.appointmentDate = {
        $gte: new Date(startDate),
        $lte: new Date(endDate)
      };
    }
    
    const bookings = await Booking.find(filter)
      .sort({ createdAt: -1 })
      .limit(limit * 1)
      .skip((page - 1) * limit);
      
    const total = await Booking.countDocuments(filter);
    
    res.json({
      success: true,
      data: bookings,
      pagination: {
        currentPage: page,
        totalPages: Math.ceil(total / limit),
        totalBookings: total
      }
    });
  } catch (error) {
    console.error('Error fetching bookings:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching bookings',
      error: error.message
    });
  }
});

// GET /api/bookings/check-availability/:date - Check available time slots for a date
router.get('/check-availability/:date', async (req, res) => {
  try {
    const date = new Date(req.params.date);
    
    // Get all booked time slots for this date
    const bookedSlots = await Booking.find({
      appointmentDate: date,
      status: { $in: ['pending', 'confirmed'] }
    }).select('appointmentTime');

    const bookedTimes = bookedSlots.map(booking => booking.appointmentTime);

    // Generate all possible time slots (9 AM to 5 PM, 30-minute intervals)
    const allTimeSlots = [];
    for (let hour = 9; hour <= 17; hour++) {
      for (let minute of [0, 30]) {
        if (hour === 17 && minute === 30) break;
        const time = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
        allTimeSlots.push(time);
      }
    }

    // Filter out booked slots
    const availableSlots = allTimeSlots.filter(slot => !bookedTimes.includes(slot));

    res.json({
      success: true,
      data: {
        date: req.params.date,
        availableSlots,
        bookedSlots: bookedTimes
      }
    });
  } catch (error) {
    console.error('Error checking availability:', error);
    res.status(500).json({
      success: false,
      message: 'Error checking availability',
      error: error.message
    });
  }
});

// GET /api/bookings/:id - Get specific booking
router.get('/:id', async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);
    
    if (!booking) {
      return res.status(404).json({
        success: false,
        message: 'Booking not found'
      });
    }
    
    res.json({
      success: true,
      data: booking
    });
  } catch (error) {
    console.error('Error fetching booking:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching booking',
      error: error.message
    });
  }
});

// POST /api/bookings - Create new booking
router.post('/', async (req, res) => {
  try {
    const {
      serviceId,
      serviceName,
      serviceDuration,
      servicePrice,
      appointmentDate,
      appointmentTime,
      clientInfo
    } = req.body;

    // Validate required fields
    if (!serviceId || !serviceName || !appointmentDate || !appointmentTime || !clientInfo) {
      return res.status(400).json({
        success: false,
        message: 'Missing required fields'
      });
    }

    // Check if the time slot is already booked
    const existingBooking = await Booking.findOne({
      appointmentDate: new Date(appointmentDate),
      appointmentTime,
      status: { $in: ['pending', 'confirmed'] }
    });

    if (existingBooking) {
      return res.status(409).json({
        success: false,
        message: 'This time slot is already booked'
      });
    }

    // Create new booking
    const booking = new Booking({
      serviceId,
      serviceName,
      serviceDuration,
      servicePrice,
      appointmentDate: new Date(appointmentDate),
      appointmentTime,
      clientInfo,
      status: 'pending'
    });

    // Generate meeting link
    booking.generateMeetingLink();

    // Save booking
    const savedBooking = await booking.save();

    // Send confirmation email
    try {
      await sendConfirmationEmail(savedBooking);
    } catch (emailError) {
      console.error('Error sending email:', emailError);
      // Don't fail the booking if email fails
    }

    res.status(201).json({
      success: true,
      message: 'Booking created successfully',
      data: savedBooking
    });

  } catch (error) {
    console.error('Error creating booking:', error);
    res.status(500).json({
      success: false,
      message: 'Error creating booking',
      error: error.message
    });
  }
});

// PUT /api/bookings/:id - Update booking
router.put('/:id', async (req, res) => {
  try {
    const booking = await Booking.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!booking) {
      return res.status(404).json({
        success: false,
        message: 'Booking not found'
      });
    }

    res.json({
      success: true,
      message: 'Booking updated successfully',
      data: booking
    });
  } catch (error) {
    console.error('Error updating booking:', error);
    res.status(500).json({
      success: false,
      message: 'Error updating booking',
      error: error.message
    });
  }
});

// PUT /api/bookings/:id/status - Update booking status
router.put('/:id/status', async (req, res) => {
  try {
    const { status } = req.body;
    
    if (!['pending', 'confirmed', 'completed', 'cancelled', 'rescheduled'].includes(status)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid status'
      });
    }

    const booking = await Booking.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    if (!booking) {
      return res.status(404).json({
        success: false,
        message: 'Booking not found'
      });
    }

    // Send status update email
    try {
      await sendStatusUpdateEmail(booking);
    } catch (emailError) {
      console.error('Error sending status update email:', emailError);
    }

    res.json({
      success: true,
      message: 'Booking status updated successfully',
      data: booking
    });
  } catch (error) {
    console.error('Error updating booking status:', error);
    res.status(500).json({
      success: false,
      message: 'Error updating booking status',
      error: error.message
    });
  }
});

// DELETE /api/bookings/:id - Delete booking
router.delete('/:id', async (req, res) => {
  try {
    const booking = await Booking.findByIdAndDelete(req.params.id);

    if (!booking) {
      return res.status(404).json({
        success: false,
        message: 'Booking not found'
      });
    }

    res.json({
      success: true,
      message: 'Booking deleted successfully'
    });
  } catch (error) {
    console.error('Error deleting booking:', error);
    res.status(500).json({
      success: false,
      message: 'Error deleting booking',
      error: error.message
    });
  }
});

// Helper function to send confirmation email
async function sendConfirmationEmail(booking) {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: booking.clientInfo.email,
    subject: 'Booking Confirmation - Career Counseling Session',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #2563eb;">Booking Confirmed!</h2>
        
        <p>Dear ${booking.clientInfo.name},</p>
        
        <p>Your career counseling session has been successfully booked. Here are the details:</p>
        
        <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="margin-top: 0; color: #374151;">Session Details</h3>
          <p><strong>Service:</strong> ${booking.serviceName}</p>
          <p><strong>Date:</strong> ${booking.appointmentDate.toLocaleDateString('en-US', { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          })}</p>
          <p><strong>Time:</strong> ${booking.appointmentTime}</p>
          <p><strong>Duration:</strong> ${booking.serviceDuration}</p>
          <p><strong>Meeting Link:</strong> <a href="${booking.meetingLink}">${booking.meetingLink}</a></p>
        </div>
        
        <p><strong>Important:</strong></p>
        <ul>
          <li>Please join the meeting 5 minutes before your scheduled time</li>
          <li>You'll receive a reminder email 24 hours before your session</li>
          <li>If you need to reschedule, please contact us at least 24 hours in advance</li>
        </ul>
        
        <p>We look forward to working with you!</p>
        
        <p>Best regards,<br>Career Counseling Team</p>
      </div>
    `
  };

  return emailTransporter.sendMail(mailOptions);
}

// Helper function to send status update email
async function sendStatusUpdateEmail(booking) {
  let subject, message;
  
  switch (booking.status) {
    case 'confirmed':
      subject = 'Session Confirmed';
      message = 'Your career counseling session has been confirmed.';
      break;
    case 'cancelled':
      subject = 'Session Cancelled';
      message = 'Your career counseling session has been cancelled.';
      break;
    case 'rescheduled':
      subject = 'Session Rescheduled';
      message = 'Your career counseling session has been rescheduled.';
      break;
    default:
      return; // Don't send email for other status changes
  }

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: booking.clientInfo.email,
    subject: `${subject} - Career Counseling`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #2563eb;">${subject}</h2>
        
        <p>Dear ${booking.clientInfo.name},</p>
        
        <p>${message}</p>
        
        <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="margin-top: 0; color: #374151;">Session Details</h3>
          <p><strong>Service:</strong> ${booking.serviceName}</p>
          <p><strong>Date:</strong> ${booking.appointmentDate.toLocaleDateString('en-US', { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          })}</p>
          <p><strong>Time:</strong> ${booking.appointmentTime}</p>
        </div>
        
        <p>If you have any questions, please don't hesitate to contact us.</p>
        
        <p>Best regards,<br>Career Counseling Team</p>
      </div>
    `
  };

  return emailTransporter.sendMail(mailOptions);
}

module.exports = router;
