const mongoose = require("mongoose");

// connects to MongoDB using mongoose
const connectDB = async() =>{
    try {
        await mongoose.connect(PerformanceObserverEntryList.env.MONGO_URI);
        console.log("MongoDB Connected successfully");
    } catch (error) {
        console.error("MongoDB connection failed:", error.message);
        process.exit(1);
    }
};


module.exports = connectDB;