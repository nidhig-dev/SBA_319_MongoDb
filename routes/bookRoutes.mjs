//Imports
import express from "express";
import Books from "../models/booksSchema.mjs";
import {books} from "../data/books.mjs"

//setups
const router = express.Router();

//seed route for books
//@route:GET(/api/books/seed)
//@desc: seeds data in boorow collection
//@access:public

// router.route("/seed")
// .get(async(req,res)=>{
//     try{
//         await Books.deleteMany({});
//         await Books.create(books);    
//         res.send("Books data has been seeded");
//         }
//         catch(err){
//             res.status(500).json({msg:"Books data seeding was unsucessful"});
//         }
    
// })

//Routes
router.route("/")
    //@route:GET(/api/books/seed)
    //@desc: seeds data in boorow collection
    //@access:public

    .post(async (req, res) => {
        try {
            let newBook = await Books.create(req.body);
            res.json(newBook);
        }
        catch (err) {
            res.status(err.status || 500).json({ msg: err.message });
        }
    })
    //@route:GET(/api/books/)
    //@desc: seeds data in boorow collection
    //@access:public

    .get(async (req, res) => {
        try {
            let getBook = await Books.find({}).sort({bookNo:1});
            if (getBook) {
                res.json(getBook);
            }
            else {
                return res.status(404).json({ msg: "No data in books collection" });
            }            
        }
        catch (err) {
            res.status(err.status || 500).json({ msg: err.message });
        }
    })
router.route("/:id")
    //@route:GET(/api/books/seed)
    //@desc: seeds data in boorow collection
    //@access:public

    .get(async (req, res) => {
        try {
            let getBook = await Books.findById(req.params.id);
            if (getBook) {
                res.json(getBook);
            }
            else {
                return res.status(404).json({ msg: "No books found" });
            }            
        }
        catch (err) {
            res.status(err.status || 500).json({ msg: err.message });
        }
    })
    //@route:GET(/api/books/seed)
    //@desc: seeds data in boorow collection
    //@access:public

    .put(async (req, res) => {
        try {
            let updateBook = await Books.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
            if (!updateBook) {
                return res.status(404).json({ msg: "No book found to be updated" });

            } else {
                res.json(updateBook);
            }            
        }
        catch (err) {
            res.status(err.status || 500).json({ msg: err.message });
        }
    })
    //@route:GET(/api/books/seed)
    //@desc: seeds data in boorow collection
    //@access:public

    .delete(async (req, res) => {
        try {
            let deleteBook = await Books.findByIdAndDelete(req.params.id);
            if (!deleteBook) {
                return res.status(404).json({ msg: "No book found to be deleted" });

            } else {
                res.json(deleteBook);
            }            
        }
        catch (err) {
            res.status(err.status || 500).json({ msg: err.message });
        }
    })
router.route("/title/:name")
    //@route:GET(/api/books/seed)
    //@desc: seeds data in boorow collection
    //@access:public

    .get(async (req, res) => {
        try {
            let getTitle = await Books.findOne({ title: req.params.name });
            if (getTitle) {
                res.json(getTitle);
            }
            else {
                return res.status(404).json({ msg: "No such book title found" });
            }
        }
        catch (err) {
            res.status(err.status || 500).json({ msg: err.message });
        }
    })
router.route("/bookNo/:id")
    //@route:GET(/api/books/seed)
    //@desc: seeds data in boorow collection
    //@access:public

    .get(async (req, res) => {
        try {
            let getBook = await Books.findOne({ bookNo: req.params.id });
            if (getBook) {
                res.json(getBook);
            }
            else {
                return res.status(404).json({ msg: "No such book No found" });
            }
        }
        catch (err) {
            res.status(err.status || 500).json({ msg: err.message });
        }
    })

//exports
export default router;