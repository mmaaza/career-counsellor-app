require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

// Import routes
const bookingRoutes = require('./routes/bookings');
const serviceRoutes = require('./routes/services');
// const contactRoutes = require('./routes/contacts');
const authRoutes = require('./routes/auth');

// CORS Configuration - Allow All Origins
const corsOptions = {
  origin: 'https://counsellorapp.netlify.app',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};

// Middleware
app.use(cors(corsOptions));
app.options('*', cors(corsOptions)); // Handle preflight requests

app.use(express.json());

// MongoDB Connection with better options
const mongoOptions = {
  serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
  socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
  maxPoolSize: 10 // Maintain up to 10 socket connections
};

mongoose.connect(process.env.MONGODB_URI, mongoOptions)
.then(() => {
  console.log('✅ Connected to MongoDB Atlas successfully!');
  console.log('Database:', mongoose.connection.db.databaseName);
})
.catch((error) => {
  console.error('❌ MongoDB connection error:', error);
  process.exit(1); // Exit the process if connection fails
});

// Connection event listeners
mongoose.connection.on('connected', () => {
  console.log('📡 Mongoose connected to MongoDB');
});

mongoose.connection.on('error', (err) => {
  console.error('❌ Mongoose connection error:', err);
});

mongoose.connection.on('disconnected', () => {
  console.log('📴 Mongoose disconnected from MongoDB');
});

// Graceful shutdown
process.on('SIGINT', async () => {
  await mongoose.connection.close();
  console.log('📴 MongoDB connection closed through app termination');
  process.exit(0);
});

// Routes
app.use('/api/bookings', bookingRoutes);
app.use('/api/services', serviceRoutes);
// app.use('/api/contacts', contactRoutes);
app.use('/api/auth', authRoutes);

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
