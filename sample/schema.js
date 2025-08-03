// connectDB.js
const mongoose = require('mongoose');
const dotenv=require('dotenv');

const connectDB = async () => {
  try {
    console.log("Mongo URI from .env:", process.env.MONGODB_URI);
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("✅ MongoDB connected successfully");
  } catch (err) {
    console.error("❌ MongoDB Connection Error:\n", err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
