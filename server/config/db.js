import mongoose from 'mongoose';
import colors from 'colors';
import dotenv from 'dotenv';
dotenv.config();
const connectDb = async ()=>{
        try{
        const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log(`Connected to MongoDB: ${conn.connection.host}`.bgGreen.black);
        }catch(error){
            console.log(`Error is ${error.message}`.bgRed.black);
        }
};

export default connectDb;