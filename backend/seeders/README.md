# Database Seeders

This directory contains seeders for populating the Career Counsellor App database with initial data.

## Available Seeders

### Service Seeder
Seeds the database with career counseling services data including:
- One-on-One Career Counseling
- Quick Career Check-In
- Career Assessment & Planning
- Resume Review & Enhancement
- Interview Preparation Session
- University & Major Guidance

## Usage

### Using NPM Scripts (Recommended)

```bash
# Seed all data
npm run seed

# Seed only services
npm run seed:services

# Show detailed help
npm run seed:help
```

### Direct Node Execution

```bash
# Seed all data
node seeders/index.js

# Seed only services
node seeders/index.js --services

# Show help
node seeders/index.js --help
```

### Using CLI Tool

```bash
# Using the CLI tool
node cli/seed.js seed              # Seed all data
node cli/seed.js seed:services     # Seed only services
node cli/seed.js help              # Show help
```

## Environment Setup

Make sure you have the following environment variables set in your `.env` file:

```env
MONGODB_URI=your_mongodb_connection_string
```

## Seeder Behavior

- **Safe Operation**: Seeders will check for existing data before inserting
- **Interactive Prompts**: You'll be asked before clearing existing data
- **Verification**: After seeding, the script verifies the data was inserted correctly
- **Detailed Logging**: Progress and results are clearly displayed

## Adding New Seeders

1. Create a new seeder file in the `seeders/` directory (e.g., `userSeeder.js`)
2. Follow the pattern used in `serviceSeeder.js`
3. Add your seeder to the main `seeders/index.js` file
4. Add appropriate npm scripts to `package.json`

Example seeder structure:

```javascript
const Model = require('../models/Model');

const data = [
  // Your data here
];

async function seedData() {
  try {
    // Check existing data
    // Clear if needed
    // Insert new data
    // Verify results
  } catch (error) {
    console.error('Error seeding data:', error);
    throw error;
  }
}

module.exports = { seedData, data };
```

## Troubleshooting

### Connection Issues
- Verify your MongoDB URI is correct
- Check if MongoDB Atlas allows connections from your IP
- Ensure your network connection is stable

### Data Issues
- Check if the data format matches the schema
- Verify required fields are present
- Look for unique constraint violations

### Permission Issues
- Ensure your MongoDB user has write permissions
- Check if the database and collections exist

## Database Schema

The seeders work with the following models:
- `Service` - Career counseling services
- `Booking` - Service bookings (future seeder)
- `User` - User accounts (future seeder)
- `Contact` - Contact form submissions (future seeder)

## Development Notes

- Seeders use the same MongoDB connection as the main application
- All seeders include proper error handling and cleanup
- Data is validated against mongoose schemas before insertion
- Existing data is preserved unless explicitly cleared
