//Imports
import express from "express";
import Borrow from "../models/borrowSchema.mjs";
import { borrow } from "../data/borrow.mjs"

//setups
const router = express.Router();

//seed route for borrow
//@route:GET(/api/borrow/seed)
//@desc: seeds data in borrow collection
//@access:public
router.route("/seed")
    .get(async (req, res) => {
        try {
            await Borrow.deleteMany({});
            await Borrow.create(borrow);
            res.send("Borrow data has been seeded");
        }
        catch (err) {
            res.status(500).json({ msg: "Borrow data seeding was unsucessful" });
        }


    })

//Routes
router.route("/")
    //@route:GET(/api/borrow/seed)
    //@desc: seeds data in boorow collection
    //@access:public

    .post(async (req, res) => {
        try {
            let newBorrow = await Borrow.create(req.body);
            res.json(newBorrow);
        }
        catch (err) {
            res.status(err.status || 500).json({ msg: err.message });
        }
    })
    //@route:GET(/api/borrow/seed)
    //@desc: seeds data in boorow collection
    //@access:public

    .get(async (req, res) => {
        try {
            let getBorrow = await Borrow.find({});
            if (getBorrow) {
                res.json(getBorrow);
            }
            else {
                return res.status(404).json({ msg: "No data in borrow collection" });
            }

        }
        catch (err) {
            res.status(err.status || 500).json({ msg: err.message });
        }
    })
router.route("/:id")
    //@route:GET(/api/borrow/seed)
    //@desc: seeds data in boorow collection
    //@access:public

    .get(async (req, res) => {
        try {
            let getBorrow = await Borrow.findById(req.params.id);
            if (getBorrow) {
                res.json(getBorrow);
            }
            else {
                return res.status(404).json({ msg: "No borrow record found" });
            }

        }
        catch (err) {
            res.status(err.status || 500).json({ msg: err.message });
        }
    })
    //@route:GET(/api/borrow/seed)
    //@desc: seeds data in boorow collection
    //@access:public

    .put(async (req, res) => {
        try {
            let updateBorrow = await Borrow.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
            if (!updateBorrow) {
                return res.status(404).json({ msg: "No borrow record found to be updated" });

            } else {
                res.json(updateBorrow);
            }

        }
        catch (err) {
            res.status(err.status || 500).json({ msg: err.message });
        }
    })
    //@route:GET(/api/borrow/seed)
    //@desc: seeds data in boorow collection
    //@access:public

    .delete(async (req, res) => {
        try {
            let deleteBorrow = await Borrow.findByIdAndDelete(req.params.id);
            if (!deleteBorrow) {
                return res.status(404).json({ msg: "No borrow record found to be deleted" });

            } else {
                res.json(deleteBorrow);
            }
        }
        catch (err) {
            res.status(err.status || 500).json({ msg: err.message });
        }
    })

router.route("/user/:id")
    //@route:GET(/api/borrow/seed)
    //@desc: seeds data in boorow collection
    //@access:public

    .get(async (req, res) => {
        try {
            let getBorrow = await Borrow.find({userId:req.params.id});
            if (getBorrow.length>0) {
                res.json(getBorrow);
            }
            else {
                return res.status(404).json({ msg: "No borrow record for this user found" });
            }

        }
        catch (err) {
            res.status(err.status || 500).json({ msg: err.message });
        }
    })
router.route("/book/:id")
    //@route:GET(/api/borrow/seed)
    //@desc: seeds data in boorow collection
    //@access:public

    .get(async (req, res) => {
        try {
            let getBorrow = await Borrow.find({ bookId: req.params.id });
            if (getBorrow.length>0) {
                res.json(getBorrow);
            }
            else {
                return res.status(404).json({ msg: "No borrow record for this book found" });
            }

        }
        catch (err) {
            res.status(err.status || 500).json({ msg: err.message });
        }
    })

router.route("/user/:userId/book/:bookId")
    //@route:GET(/api/borrow/seed)
    //@desc: seeds data in boorow collection
    //@access:public

    .get(async (req, res) => {
        try {
            let getBorrow = await Borrow.find({ userId: req.params.userId, bookId: req.params.bookId });
            if (getBorrow.length > 0) {
                res.json(getBorrow);
            }
            else {
                return res.status(404).json({ msg: "No borrow record for this book found" });
            }

        }
        catch (err) {
            res.status(err.status || 500).json({ msg: err.message });
        }
    })

//exports
export default router;