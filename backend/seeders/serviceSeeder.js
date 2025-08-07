const mongoose = require('mongoose');
const Service = require('../models/Service');
require('dotenv').config();

// Service data to seed
const servicesData = [
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

async function seedServices() {
  try {
    console.log('🌱 Starting service seeding process...');

    // Check if services already exist
    const existingServicesCount = await Service.countDocuments();
    
    if (existingServicesCount > 0) {
      console.log(`⚠️  Found ${existingServicesCount} existing services in database.`);
      
      // Ask user if they want to clear existing data
      const readline = require('readline');
      const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
      });

      const answer = await new Promise((resolve) => {
        rl.question('Do you want to clear existing services and reseed? (y/N): ', (answer) => {
          rl.close();
          resolve(answer.toLowerCase());
        });
      });

      if (answer === 'y' || answer === 'yes') {
        console.log('🗑️  Clearing existing services...');
        await Service.deleteMany({});
        console.log('✅ Existing services cleared.');
      } else {
        console.log('⏭️  Skipping seeding. Existing services preserved.');
        return;
      }
    }

    // Insert new services
    console.log('📥 Inserting new services...');
    const insertedServices = await Service.insertMany(servicesData);
    
    console.log(`✅ Successfully seeded ${insertedServices.length} services:`);
    insertedServices.forEach((service, index) => {
      console.log(`   ${index + 1}. ${service.title} (ID: ${service.serviceId})`);
    });

    console.log('\n📊 Seeding Summary:');
    console.log(`   - Total services created: ${insertedServices.length}`);
    console.log(`   - Categories: ${[...new Set(insertedServices.map(s => s.category))].join(', ')}`);
    
  } catch (error) {
    console.error('❌ Error seeding services:', error);
    throw error;
  }
}

async function verifySeeding() {
  try {
    console.log('\n🔍 Verifying seeded data...');
    
    const totalServices = await Service.countDocuments();
    const servicesByCategory = await Service.aggregate([
      { $group: { _id: '$category', count: { $sum: 1 } } },
      { $sort: { _id: 1 } }
    ]);
    
    console.log(`✅ Verification complete:`);
    console.log(`   - Total services in database: ${totalServices}`);
    console.log(`   - Services by category:`);
    servicesByCategory.forEach(cat => {
      console.log(`     * ${cat._id}: ${cat.count} services`);
    });
    
  } catch (error) {
    console.error('❌ Error verifying seeded data:', error);
  }
}

async function main() {
  try {
    await connectDB();
    await seedServices();
    await verifySeeding();
    
    console.log('\n🎉 Service seeding completed successfully!');
    
  } catch (error) {
    console.error('💥 Seeding failed:', error);
  } finally {
    await mongoose.connection.close();
    console.log('📴 Database connection closed.');
    process.exit(0);
  }
}

// Run the seeder if this file is executed directly
if (require.main === module) {
  main();
}

module.exports = {
  seedServices,
  servicesData
};
