const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
require('dotenv').config();

const seedAdminUser = async () => {
  try {
    // Check if admin user already exists
    const existingAdmin = await User.findOne({ email: 'admin@careercounsellor.com' });
    
    if (existingAdmin) {
      console.log('Admin user already exists');
      return;
    }

    // Hash the password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash('counsellor2025', saltRounds);

    // Create admin user
    const adminUser = new User({
      email: 'admin@careercounsellor.com',
      password: hashedPassword,
      role: 'admin',
      name: 'Admin User'
    });

    await adminUser.save();
    console.log('✅ Admin user created successfully');
    console.log('📧 Email: admin@careercounsellor.com');
    console.log('🔑 Password: counsellor2025');

  } catch (error) {
    console.error('❌ Error seeding admin user:', error);
  }
};

// If this file is run directly (not imported)
if (require.main === module) {
  const mongoOptions = {
    serverSelectionTimeoutMS: 5000,
    socketTimeoutMS: 45000,
    maxPoolSize: 10
  };

  (async () => {
    try {
      await mongoose.connect(process.env.MONGODB_URI, mongoOptions);
      console.log('✅ Connected to MongoDB Atlas successfully!');
      
      await seedAdminUser();
      
    } catch (error) {
      console.error('❌ Admin seeding failed:', error);
    } finally {
      await mongoose.connection.close();
      console.log('📴 Database connection closed.');
      process.exit(0);
    }
  })();
}

module.exports = seedAdminUser;
