const mongoose = require('mongoose');


const uri = 'mongodb+srv://shukla5bhaiya:%40gauravShukla12345@cluster0.ygr9e.mongodb.net/gauravshukla12345?retryWrites=true&w=majority';

const connectDB = async () => {
  try {
    await mongoose.connect(uri);
    console.log('MongoDB connected...');
  } catch (error) {
    console.error('MongoDB connection failed:', error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
