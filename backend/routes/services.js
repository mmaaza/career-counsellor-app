const express = require('express');
const router = express.Router();
const Service = require('../models/Service');

// GET /api/services - Get all active services
router.get('/', async (req, res) => {
  try {
    const { category, isActive = 'true' } = req.query;
    
    let filter = {};
    if (category) filter.category = category;
    if (isActive !== 'all') filter.isActive = isActive === 'true';
    
    const services = await Service.find(filter)
      .sort({ serviceId: 1 });
    
    res.json({
      success: true,
      data: services
    });
  } catch (error) {
    console.error('Error fetching services:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching services',
      error: error.message
    });
  }
});

// GET /api/services/:id - Get specific service
router.get('/:id', async (req, res) => {
  try {
    const serviceId = parseInt(req.params.id);
    const service = await Service.findOne({ serviceId });
    
    if (!service) {
      return res.status(404).json({
        success: false,
        message: 'Service not found'
      });
    }
    
    res.json({
      success: true,
      data: service
    });
  } catch (error) {
    console.error('Error fetching service:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching service',
      error: error.message
    });
  }
});

// POST /api/services - Create new service (admin only)
router.post('/', async (req, res) => {
  try {
    const {
      serviceId,
      title,
      duration,
      price,
      priceNumeric,
      description,
      features,
      icon,
      category
    } = req.body;

    // Validate required fields
    if (!serviceId || !title || !duration || !price || !description || !features || !icon || !category) {
      return res.status(400).json({
        success: false,
        message: 'Missing required fields'
      });
    }

    // Check if service ID already exists
    const existingService = await Service.findOne({ serviceId });
    if (existingService) {
      return res.status(409).json({
        success: false,
        message: 'Service ID already exists'
      });
    }

    // Create new service
    const service = new Service({
      serviceId,
      title,
      duration,
      price,
      priceNumeric: priceNumeric || parseInt(price.replace(/\D/g, '')),
      description,
      features,
      icon,
      category
    });

    const savedService = await service.save();

    res.status(201).json({
      success: true,
      message: 'Service created successfully',
      data: savedService
    });

  } catch (error) {
    console.error('Error creating service:', error);
    res.status(500).json({
      success: false,
      message: 'Error creating service',
      error: error.message
    });
  }
});

// PUT /api/services/:id - Update service (admin only)
router.put('/:id', async (req, res) => {
  try {
    const serviceId = parseInt(req.params.id);
    const updateData = req.body;

    const service = await Service.findOneAndUpdate(
      { serviceId },
      updateData,
      { new: true, runValidators: true }
    );

    if (!service) {
      return res.status(404).json({
        success: false,
        message: 'Service not found'
      });
    }

    res.json({
      success: true,
      message: 'Service updated successfully',
      data: service
    });

  } catch (error) {
    console.error('Error updating service:', error);
    res.status(500).json({
      success: false,
      message: 'Error updating service',
      error: error.message
    });
  }
});

// DELETE /api/services/:id - Delete service (admin only)
router.delete('/:id', async (req, res) => {
  try {
    const serviceId = parseInt(req.params.id);
    
    const service = await Service.findOneAndDelete({ serviceId });

    if (!service) {
      return res.status(404).json({
        success: false,
        message: 'Service not found'
      });
    }

    res.json({
      success: true,
      message: 'Service deleted successfully'
    });

  } catch (error) {
    console.error('Error deleting service:', error);
    res.status(500).json({
      success: false,
      message: 'Error deleting service',
      error: error.message
    });
  }
});

// POST /api/services/seed - Seed initial services data
router.post('/seed', async (req, res) => {
  try {
    // Check if services already exist
    const existingServices = await Service.countDocuments();
    if (existingServices > 0) {
      return res.status(400).json({
        success: false,
        message: 'Services already exist. Use individual endpoints to add new services.'
      });
    }

    // Initial services data
    const initialServices = [
      {
        serviceId: 1,
        title: "One-on-One Career Counseling",
        duration: "60 minutes",
        price: "$150",
        priceNumeric: 150,
        description: "Personalized career guidance and strategic planning session to help you navigate your professional journey.",
        features: [
          "Comprehensive career assessment",
          "Goal setting and action planning",
          "Industry insights and market analysis",
          "Personalized career roadmap",
          "Follow-up email summary",
          "Resource recommendations"
        ],
        icon: "👥",
        category: "Counseling"
      },
      {
        serviceId: 2,
        title: "Quick Career Check-In",
        duration: "30 minutes",
        price: "$85",
        priceNumeric: 85,
        description: "Brief consultation perfect for specific questions, quick guidance, or follow-up sessions.",
        features: [
          "Focused problem-solving",
          "Quick career advice",
          "Resume quick review",
          "Interview preparation tips",
          "Actionable next steps"
        ],
        icon: "⚡",
        category: "Counseling"
      },
      {
        serviceId: 3,
        title: "Career Assessment & Planning",
        duration: "90 minutes",
        price: "$200",
        priceNumeric: 200,
        description: "Comprehensive assessment using validated tools to identify your ideal career path and create a detailed plan.",
        features: [
          "Myers-Briggs Type Indicator (MBTI)",
          "Strong Interest Inventory",
          "Values and skills assessment",
          "Career exploration exercises",
          "Detailed written report",
          "90-day action plan"
        ],
        icon: "📊",
        category: "Assessment"
      },
      {
        serviceId: 4,
        title: "Resume Review & Enhancement",
        duration: "45 minutes",
        price: "$120",
        priceNumeric: 120,
        description: "Professional resume review and optimization to help you stand out in today's competitive job market.",
        features: [
          "Comprehensive resume analysis",
          "ATS optimization",
          "Content and formatting improvements",
          "Industry-specific keywords",
          "Cover letter guidance",
          "LinkedIn profile tips"
        ],
        icon: "📄",
        category: "Documents"
      },
      {
        serviceId: 5,
        title: "Interview Preparation Session",
        duration: "90 minutes",
        price: "$200",
        priceNumeric: 200,
        description: "Intensive interview coaching with mock interviews and personalized feedback to boost your confidence.",
        features: [
          "Mock interview practice",
          "Behavioral question preparation",
          "Salary negotiation strategies",
          "Body language coaching",
          "Industry-specific interview tips",
          "Post-interview follow-up guidance"
        ],
        icon: "🎯",
        category: "Interview"
      },
      {
        serviceId: 6,
        title: "University & Major Guidance",
        duration: "75 minutes",
        price: "$130",
        priceNumeric: 130,
        description: "Specialized guidance for students choosing universities, majors, and planning their academic journey.",
        features: [
          "University selection criteria",
          "Major exploration and matching",
          "Application strategy planning",
          "Scholarship and funding guidance",
          "Academic timeline planning",
          "Career pathway mapping"
        ],
        icon: "🎓",
        category: "Education"
      }
    ];

    // Insert services
    const services = await Service.insertMany(initialServices);

    res.status(201).json({
      success: true,
      message: `${services.length} services seeded successfully`,
      data: services
    });

  } catch (error) {
    console.error('Error seeding services:', error);
    res.status(500).json({
      success: false,
      message: 'Error seeding services',
      error: error.message
    });
  }
});

module.exports = router;
