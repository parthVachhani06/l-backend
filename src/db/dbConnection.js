const mongoose = require('mongoose');
const config = require('../config/config');  // Ensure the config contains the correct MONGODB_URL

const connectDB = async () => {
  try {
    console.log("Connecting to MongoDB with URL: " + config.mongodb.url); // For debugging
    await mongoose.connect(config.mongodb.url, {
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
    });
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('Database connection error: ', error);
    process.exit(1);  // Exit if connection fails
  }
};

module.exports = { connectDB };
