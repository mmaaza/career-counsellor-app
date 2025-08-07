#!/usr/bin/env node

const { exec } = require('child_process');
const path = require('path');

const commands = {
  'seed': 'node seeders/index.js',
  'seed:services': 'node seeders/index.js --services',
  'seed:help': 'node seeders/index.js --help',
  'help': 'show-help'
};

function showHelp() {
  console.log(`
🌱 Career Counsellor App - Database Seeder CLI

Available commands:
  npm run seed              Seed all data
  npm run seed:services     Seed only services
  npm run seed:help         Show seeder help

Direct usage:
  node cli/seed.js seed              # Seed all data
  node cli/seed.js seed:services     # Seed only services
  node cli/seed.js help              # Show this help

Examples:
  # Seed all data
  npm run seed

  # Seed only services
  npm run seed:services

  # Get detailed seeder help
  npm run seed:help
  `);
}

function runCommand(cmd) {
  return new Promise((resolve, reject) => {
    exec(cmd, { cwd: path.join(__dirname, '..') }, (error, stdout, stderr) => {
      if (error) {
        console.error(`Error: ${error.message}`);
        reject(error);
        return;
      }
      if (stderr) {
        console.error(`Stderr: ${stderr}`);
      }
      console.log(stdout);
      resolve(stdout);
    });
  });
}

async function main() {
  const args = process.argv.slice(2);
  
  if (args.length === 0 || args.includes('help') || args.includes('--help') || args.includes('-h')) {
    showHelp();
    return;
  }

  const command = args[0];
  
  if (!commands[command]) {
    console.error(`❌ Unknown command: ${command}`);
    console.log('Run "node cli/seed.js help" for available commands.');
    process.exit(1);
  }

  if (command === 'help') {
    showHelp();
    return;
  }

  try {
    console.log(`🚀 Running: ${command}`);
    await runCommand(commands[command]);
  } catch (error) {
    console.error(`❌ Command failed: ${error.message}`);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = { runCommand, showHelp };
