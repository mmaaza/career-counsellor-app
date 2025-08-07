const mongoose = require('mongoose');
const { seedServices } = require('./serviceSeeder');
require('dotenv').config();

// MongoDB connection options
const mongoOptions = {
  serverSelectionTimeoutMS: 5000,
  socketTimeoutMS: 45000,
  maxPoolSize: 10
};

async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGODB_URI, mongoOptions);
    console.log('✅ Connected to MongoDB Atlas successfully!');
    console.log('Database:', mongoose.connection.db.databaseName);
  } catch (error) {
    console.error('❌ MongoDB connection error:', error);
    process.exit(1);
  }
}

async function runAllSeeders() {
  try {
    console.log('🚀 Starting database seeding process...\n');
    
    // Run service seeder
    console.log('📋 Seeding Services...');
    await seedServices();
    
    // Add more seeders here as needed
    // console.log('👥 Seeding Users...');
    // await seedUsers();
    
    // console.log('📞 Seeding Contacts...');
    // await seedContacts();
    
    console.log('\n✨ All seeders completed successfully!');
    
  } catch (error) {
    console.error('💥 Seeding process failed:', error);
    throw error;
  }
}

async function main() {
  try {
    await connectDB();
    await runAllSeeders();
    
  } catch (error) {
    console.error('❌ Main seeder failed:', error);
  } finally {
    await mongoose.connection.close();
    console.log('📴 Database connection closed.');
    process.exit(0);
  }
}

// Handle command line arguments
const args = process.argv.slice(2);

if (args.includes('--help') || args.includes('-h')) {
  console.log(`
🌱 Database Seeder Help

Usage: node seeders/index.js [options]

Options:
  --help, -h     Show this help message
  --services     Seed only services
  --all          Seed all data (default)

Examples:
  node seeders/index.js              # Seed all data
  node seeders/index.js --services   # Seed only services
  node seeders/index.js --all        # Seed all data explicitly
  `);
  process.exit(0);
}

if (args.includes('--services')) {
  // Run only service seeder
  (async () => {
    try {
      await connectDB();
      console.log('📋 Seeding Services only...');
      await seedServices();
      console.log('✅ Service seeding completed!');
    } catch (error) {
      console.error('❌ Service seeding failed:', error);
    } finally {
      await mongoose.connection.close();
      console.log('📴 Database connection closed.');
      process.exit(0);
    }
  })();
} else {
  // Run all seeders (default)
  main();
}

module.exports = {
  runAllSeeders,
  connectDB
};
