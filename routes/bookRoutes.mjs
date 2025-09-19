//Imports
import express from "express";
import Books from "../models/booksSchema.mjs";
import { books } from "../data/books.mjs"

//setups
const router = express.Router();

//seed route for books
//@route:GET(/api/books/seed)
//@desc: seeds data in books collection
//@access:public

router.route("/seed")
    .get(async (req, res) => {
        try {
            await Books.deleteMany({});
            await Books.create(books);
            res.send("Books data has been seeded");
        }
        catch (err) {
            res.status(500).json({ msg: "Books data seeding was unsucessful" });
        }

    })

//Routes
router.route("/")
    //@route:POST(/api/books)
    //@desc: creates one or more book entry in books collection
    //@access:public
    //@sample data:
    /* {
    "bookNo": 17,
    "title": "The Class",
    "author": "Eric Segal",
    "description": "A powerful and moving saga of five extraordinary members of the Harvard class of 1958 and the women with whom their lives are intertwined. Their explosive story begins in a time of innocence and spans a turbulent quarter century, culminating in their dramatic twenty-five reunion at which they confront their classmates--and the balance sheet of their own lives. Always at the center; amid the passion, laughter, and glory, stands Harvard--the symbol of who they are and who they will be. They were a generation who made the rules--then broke them--whose glittering successes, heartfelt tragedies, and unbridled ambitions would stun the world.",
    "pages": 560,
    "cover": "https://m.media-amazon.com/images/I/51rIay3vijL.jpg"
    }*/
    .post(async (req, res) => {
        try {
            //check for existing title in database
            const existing = await Books.findOne({
                //making sure title check is case insensitive
                title: { $regex: new RegExp(`^${req.body.title.trim()}$`, 'i') }
            });
            //if the title exists
            if (existing) {
                return res.status(400).json({ msg: 'Book title already exists' });
            }            
            if (req.body.bookNo && req.body.title && req.body.author) {
                let newBook = await Books.create(req.body);
                res.json(newBook);
            }
            else {
                return res.status(400).json({ msg: "Required fields are missing!" });
            }
        }
        catch (err) {
            res.status(err.status || 500).json({ msg: err.message });
        }
    })
    //@route:GET(/api/books/)
    //@desc: gets list of books from books collection
    //@access:public

    .get(async (req, res) => {
        try {
            let getBook = await Books.find({}).sort({ bookNo: 1 });
            if (getBook.length>0) {
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
    //@route:GET(/api/books/:id)
    //@desc: gets one book entry from books collection based on Object Id
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
    //@route:PUT(/api/books/:id)
    //@desc: updates one book record in book collection based on object id.
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
    //@route:DELETE(/api/books/:id)
    //@desc: deletes one book entry in book collection based on object id
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
    //@route:GET(/api/books/title/:name)
    //@desc: finds a book by title in books collection
    //@access:public

    .get(async (req, res) => {
        try {
            let getTitle = await Books.findOne({
                //get title ignoring Case sensitiveness
                title: { $regex: new RegExp(`^${req.params.name.trim()}$`, 'i') }
            });
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
    //@route:GET(/api/books/bookNo/:id)
    //@desc: gets a book from books collection based on bookNo
    //@access:public

    .get(async (req, res) => {
        try {
            let getBook = await Books.findOne({ bookNo: req.params.id });
            if (getBook) {
                res.json(getBook);
            }
            else {
                return res.status(404).json({ msg: "No such book Number found" });
            }
        }
        catch (err) {
            res.status(err.status || 500).json({ msg: err.message });
        }
    })

//exports
export default router;