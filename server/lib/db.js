// lib/db.js
import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    mongoose.connection.on("connected", () =>
      console.log("Database Connected")
    );

    await mongoose.connect(`${process.env.MONGO_URI}/chat-app`);
  } catch (error) {
    console.log("DB Connection Error:", error.message);
  }
};

