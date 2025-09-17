//Imports
import mongoose from "mongoose";

//create Schema
const booksSchema=new mongoose.Schema({
    bookNo:{
        type:Number,
        unique:true,
        required:true,
        min:1,
    },
    title:{
        type:String,
        unique:true,
        trim: true,
        required:true,        
    },
    author:{
        type: String,
        trim: true,
        required:true,
    },
    description:{
        type:String,
        trim: true,
        maxlength:2000,
    },
    pages:{
        type:Number,
        min:1,
        max:10000,
    },
    cover:{
        type: String,
        trim: true,
        match: /^https?:\/\/.+\.(jpg|jpeg|png|webp|gif)$/i,
    }
});

//Index
//booksSchema.index({title:1});
   
//export
export default mongoose.model("Books",booksSchema);

