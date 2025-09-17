//Imports
import express from "express";
import Admin from "../models/adminSchema.mjs";
import { admin } from "../data/admin.mjs";
//setups
const router = express.Router();

//seed route for admin
//@route:GET(/api/admin/seed)
//@desc: seeds data in boorow collection
//@access:public

// router.route("/seed")
// .get(async(req,res)=>{
//     try{
//         await Admin.deleteMany({});
//     await Admin.create(admin);    
//     res.send("Admin data has been seeded");
//     }
//     catch(err){
//         res.status(500).json({msg:"Admin data seeding was unsucessful"});
//     }

// })

//routes
router.route("/")
    //@route:GET(/api/admin/seed)
    //@desc: seeds data in boorow collection
    //@access:public

    .post(async (req, res) => {
        try {
            let newAdmin = await Admin.create(req.body);
            res.json(newAdmin);
        }
        catch (err) {
            res.status(err.status || 500).json({ msg: err.message });
        }
    })
    //@route:GET(/api/admin/seed)
    //@desc: seeds data in boorow collection
    //@access:public

    .get(async (req, res) => {
        try {
            let getAdmin = await Admin.find({});
            if (getAdmin){
                res.json(getAdmin);
            }
            else{
                res.status(404).json({ msg: "No data in admin collection" });
            }
        }
        catch (err) {
            res.status(err.status || 500).json({ msg: err.message });
        }
    })
router.route("/:id")
    //@route:GET(/api/admin/seed)
    //@desc: seeds data in boorow collection
    //@access:public

    .get(async (req, res) => {
        try {
            let getAdmin = await Admin.findById(req.params.id);
            if (getAdmin) {
                res.json(getAdmin);
            }
            else {
                res.status(404).json({ msg: "No Admin found" });
            }
        }
        catch (err) {
            res.status(err.status || 500).json({ msg: err.message });
        }
    })
    //@route:GET(/api/admin/seed)
    //@desc: seeds data in boorow collection
    //@access:public

    .put(async (req, res) => {
        try {
            let updateAdmin = await Admin.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
            if (!updateAdmin) {
                res.status(404).json({ msg: "No admin found to be updated" });

            } else {
                res.json(updateAdmin);
            }         
        }
        catch (err) {
            res.status(err.status || 500).json({ msg: err.message });
        }
    })
    //@route:GET(/api/admin/seed)
    //@desc: seeds data in boorow collection
    //@access:public

    .delete(async (req, res) => {
        try {
            let deleteAdmin = await Admin.findByIdAndDelete(req.params.id);
           // console.log(deleteAdmin);
            if (!deleteAdmin) {
                res.status(404).json({ msg: "No admin found to be deleted" });
                
            } else {
                res.json(deleteAdmin);
            }
        }
        catch (err) {
            res.status(err.status || 500).json({ msg: err.message });
        }
    })
router.route("/role/:role")
    //@route:GET(/api/admin/seed)
    //@desc: seeds data in boorow collection
    //@access:public

    .get(async (req, res) => {
        try {
            let getAdmin = await Admin.find({ role: req.params.role });
            if (getAdmin) {
                res.json(getAdmin);
            }
            else {
                res.status(404).json({ msg: "No such Admin role found" });
            }

        }
        catch (err) {
            res.status(err.status || 500).json({ msg: err.message });
        }
    })

//exports
export default router;