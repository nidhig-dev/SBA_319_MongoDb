//Imports
import mongoose from "mongoose";

//create Schema
const adminSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        minlength:2,
        maxLength:50,
    },
    email: {
        type: String,
        required: true,
        lowercase:true,     //convert to lower case
        trim: true,
        unique:true,
        match: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
    },
    age: {
        type: Number,
        min:18,
        max:80,       
    },
    role: {
        type: String,
        enum: {
            values: [
                "superadmin",
                "admin",
                "moderator"
            ],
            message: "{VALUE} is not supported."
        },
        required:true,        
    },
    isActive:{
        type:Boolean,
        default:true,
        required:true,
    }    
});

//Index
adminSchema.index({role:1});

//export
export default mongoose.model("Admin", adminSchema);

