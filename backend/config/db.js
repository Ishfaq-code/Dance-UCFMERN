import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const connectDB = async () => {
    try{
        const connection =  await mongoose.connect(process.env.MONGO_DBURL);
        console.log(connection.connection.host);
    }catch (error){
        console.log(error.message);
        process.exit(1); // Error, failed to connect
    }
}