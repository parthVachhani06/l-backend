const mongoose = require('mongoose');
const config = require('../config/config');

const connectDB = async () => {
  try {
    console.log("Connecting to MongoDB with URL:", config.mongodb.url);  // Debugging line
    await mongoose.connect(config.mongodb.url, config.mongodb.options);
    console.log("Database connection successful!");
  } catch (error) {
    console.error("Database connection error:", error);
    process.exit(1);  // Exit the app on failure
  }
};

module.exports = { connectDB };
