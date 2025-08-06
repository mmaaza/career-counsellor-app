const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  // Service Information
  serviceId: {
    type: Number,
    required: true
  },
  serviceName: {
    type: String,
    required: true
  },
  serviceDuration: {
    type: String,
    required: true
  },
  servicePrice: {
    type: Number,
    required: true
  },
  
  // Appointment Details
  appointmentDate: {
    type: Date,
    required: true
  },
  appointmentTime: {
    type: String,
    required: true
  },
  
  // Client Information
  clientInfo: {
    name: {
      type: String,
      required: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true
    },
    phone: {
      type: String,
      required: true,
      trim: true
    },
    educationalBackground: {
      type: String,
      trim: true
    },
    preferredLanguage: {
      type: String,
      default: 'English'
    },
    specialRequests: {
      type: String,
      trim: true
    }
  },
  
  // Booking Status
  status: {
    type: String,
    enum: ['pending', 'confirmed', 'completed', 'cancelled', 'rescheduled'],
    default: 'pending'
  },
  
  // Payment Information
  paymentStatus: {
    type: String,
    enum: ['pending', 'paid', 'refunded', 'failed'],
    default: 'pending'
  },
  paymentId: {
    type: String
  },
  
  // Session Details
  meetingLink: {
    type: String
  },
  sessionNotes: {
    type: String
  },
  
  // Timestamps
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

// Update the updatedAt field before saving
bookingSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

// Instance method to generate meeting link
bookingSchema.methods.generateMeetingLink = function() {
  // In a real implementation, this would integrate with Google Meet API
  // For now, we'll generate a placeholder
  const meetingId = Math.random().toString(36).substring(2, 15);
  this.meetingLink = `https://meet.google.com/${meetingId}`;
  return this.meetingLink;
};

// Static method to find bookings by date range
bookingSchema.statics.findByDateRange = function(startDate, endDate) {
  return this.find({
    appointmentDate: {
      $gte: startDate,
      $lte: endDate
    }
  });
};

// Index for efficient querying
bookingSchema.index({ 'clientInfo.email': 1 });
bookingSchema.index({ appointmentDate: 1 });
bookingSchema.index({ status: 1 });

module.exports = mongoose.model('Booking', bookingSchema);
