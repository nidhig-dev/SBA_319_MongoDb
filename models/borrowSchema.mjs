//Imports
import mongoose from "mongoose";

//create Schema
const borrowSchema=new mongoose.Schema({
    userId:{
        type: Number,
        min:1,
        required:true,        
},
    bookId:{
        type: Number,
        min:1,
        required: true,
    },    
    status:{
        type:String,
        enum:{
            values:[
                "borrowed",
                "returned",
                "renewed",
                "overdue",
                "lost",
            ],
            message:"{VALUE} not supported."
        },
        required:true,
    },
    renewcount:{
        type:Number,
        default:0,
        min:0,
        max:2,
        required:true,
    },
    remarks:{
        type:String,
        trim:true,
        maxlength:1000,
    },
});
//Index
borrowSchema.index({userId:1});
borrowSchema.index({ bookId: 1 });
borrowSchema.index({ userId: 1, bookId: 1 }, { unique: true });
//export
export default mongoose.model("Borrow", borrowSchema);

