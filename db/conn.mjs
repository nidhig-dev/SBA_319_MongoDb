//imports 
import mongoose from "mongoose";
import dotenv from "dotenv";

//set up
dotenv.config();
const connectionString=process.env.MongoURI||"";

//database connection
async function connectDB(){
    try{
        await mongoose.connect(connectionString);
        console.log("Connected to Mongodb...... ")
    }
    catch(err){
        res.status(500).json({msg:err.message});
    }

}

//export
export default connectDB;