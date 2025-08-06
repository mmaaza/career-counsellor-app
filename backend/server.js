require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Import routes
const bookingRoutes = require('./routes/bookings');
// const contactRoutes = require('./routes/contacts');
// const authRoutes = require('./routes/auth');

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI)
.then(() => {
  console.log('✅ Connected to MongoDB Atlas successfully!');
})
.catch((error) => {
  console.error('❌ MongoDB connection error:', error);
});

// Routes
app.use('/api/bookings', bookingRoutes);
// app.use('/api/contacts', contactRoutes);
// app.use('/api/auth', authRoutes);

// Test route
app.get('/api/test', (req, res) => {
  res.json({ 
    message: 'Backend connected successfully!',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development'
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: 'Something went wrong!',
    error: process.env.NODE_ENV === 'development' ? err.message : {}
  });
});

// Handle 404
app.use('*', (req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found'
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📁 Environment: ${process.env.NODE_ENV || 'development'}`);
});