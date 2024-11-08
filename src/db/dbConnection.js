const mongoose = require('mongoose');
const config = require('../config/config'); 
const dotenv = require("dotenv");
 // Ensure the config contains the correct MONGODB_URL

const connectDB = async () => {
  try {
    console.log("Connecting to MongoDB with URL: " + config.mongodb.url); // For debugging
    await mongoose.connect(process.env.MONGODB_URL, config.mongodb.options);
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('Database connection error: ', error);
    process.exit(1);  // Exit if connection fails
  }
};

module.exports = { connectDB };
