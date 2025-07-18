
const mongoose = require('mongoose')

// mongoose is a library to manage database connection 

// Os5HJNjmlKc3gNtI  pass 

//url mongo mongodb+srv://vy9282677:Os5HJNjmlKc3gNtI@cluster0.tgyhtah.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

const connectDB = async () => {
   try {
     const conn = await mongoose.connect(process.env.MONGO_CONN );
 
     console.log(`MongoDB connected successfully`);
   } catch (error) {
     console.error('MongoDB connection error:', error.message);
     process.exit(1); // Exit with failure
   }
 };
 
module.exports = connectDB;
