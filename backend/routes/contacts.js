const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

// POST /api/contacts - Submit contact form
router.post('/', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: 'All fields are required'
      });
    }

    // Create new contact
    const contact = new Contact({
      name,
      email,
      subject,
      message
    });

    const savedContact = await contact.save();

    res.status(201).json({
      success: true,
      message: 'Contact form submitted successfully',
      data: savedContact
    });

  } catch (error) {
    console.error('Error submitting contact form:', error);
    res.status(500).json({
      success: false,
      message: 'Error submitting contact form',
      error: error.message
    });
  }
});

// GET /api/contacts - Get all contacts (admin only)
router.get('/', async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    
    res.json({
      success: true,
      data: contacts
    });
  } catch (error) {
    console.error('Error fetching contacts:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching contacts',
      error: error.message
    });
  }
});

module.exports = router;
