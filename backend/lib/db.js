import mongoose from "mongoose";

export async function connectDB() {
  try{
    const mongoUri = process.env.MONGO_URL;

    if(!mongoUri){
      throw new Error("Mongo Uri is required!");
    }

    const conn = await mongoose.connect(mongoUri);
    console.log("Mongo DB connected ", conn.connection.host);
  }catch(error){
    console.error("Mongo DB connection error: ", error.message);
    process.exit(1)
  }
}