import mongoose from "mongoose";

const connectDB = async () =>{
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("mONGOdb CONNECTED");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        
    }
}