require('dotenv').config();
const mongoose = require('mongoose');
const dns = require('dns');

console.log('Testing MongoDB connection...');

// Check DNS resolution
dns.lookup('career-counsellor-datab.5bxyt91.mongodb.net', (err, address) => {
  if (err) {
    console.log('❌ DNS resolution failed:', err.message);
  } else {
    console.log('✅ DNS resolution successful:', address);
  }
});

console.log('MongoDB URI:', process.env.MONGODB_URI.replace(/:[^:@]*@/, ':****@')); // Hide password

const options = {
  serverSelectionTimeoutMS: 5000, // Timeout after 5s instead of 30s
  socketTimeoutMS: 45000,
  maxPoolSize: 10
};

mongoose.connect(process.env.MONGODB_URI, options)
.then(() => {
  console.log('✅ MongoDB connection successful!');
  console.log('Database:', mongoose.connection.db.databaseName);
  console.log('Connection state:', mongoose.connection.readyState);
  
  // Test a simple query
  return mongoose.connection.db.admin().ping();
})
.then(() => {
  console.log('✅ Database ping successful!');
  process.exit(0);
})
.catch((error) => {
  console.error('❌ MongoDB connection failed:', error.message);
  console.error('Error details:', error);
  process.exit(1);
});
