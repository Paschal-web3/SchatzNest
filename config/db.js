const mongoose = require('mongoose');
require ('dotenv').config()

// Connect to MongoDB

const connectDB = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI)
            console.log('MongoDB connected...');
        
    } catch (error) {
        console.error(error.message);
    }
}

module.exports = connectDB;