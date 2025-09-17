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
            res.json(getBorrow);
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
            res.json(getBorrow);
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
            res.json(updateBorrow);
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
            res.json(deleteBorrow);
        }
        catch (err) {
            res.status(err.status || 500).json({ msg: err.message });
        }
    })
//exports
export default router;