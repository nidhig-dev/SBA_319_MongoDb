//Imports
import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/conn.mjs"
import adminRoutes from "./routes/adminRoutes.mjs";
// import bookRoutes from "./routes/bookRoutes.mjs";
// import borrowRoutes from "./routes/borrowRoutes.mjs";

//set up
const app=express();
dotenv.config();
const PORT=process.env.PORT||3001;

//call db function
connectDB();

//middleware
app.use(express.json());

//routes
app.use("/api/admin",adminRoutes);
// app.use("/api/books",bookRoutes);
// app.use("/api/borrow",borrowRoutes);


app.use((req, res, next) => {
    res.status(400).json({msg:"Incorrect Path"})
});
//global error handling
app.use((error,req,res,next)=>{
    res.status(error.status||500).json({msg:error.message});
});

//listen
app.listen(PORT,()=>{
    console.log(`Server starting in port:${PORT}`)
})
