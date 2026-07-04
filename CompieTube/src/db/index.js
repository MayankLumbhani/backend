import mongoose from "mongoose";
import { DB_NAME } from "../constans.js";

const connectDb = async () => {

    try {

        const connectionInstance = await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);

        console.log(`\n MongoDB conneccted !! DB HOST : ${connectionInstance.connection.host}`)
        
    } 
    
    catch (error) {

        console.log("MongoDB connection error", error);
        process.exit(1);

    }

}

export default connectDb;