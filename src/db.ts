import mongoose from "mongoose";

export async function connectDatabase() {
  const uri = process.env.MONGODB_URI || "mongodb://localhost:27017/portfolio";
  
  try {
    await mongoose.connect(uri);
    console.log("Connected to MongoDB successfully.");
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
}

export default connectDatabase;
