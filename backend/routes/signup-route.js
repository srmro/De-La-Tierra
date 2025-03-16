import { Router, request, response } from "express";
import Signup from "../models/signup-model";
import mongoose from "mongoose";



const router = Router();


router.get("/signup", async (req, res) => {
    try {

        const signup = await Signup.find()
        res.status(200).send(signup);

    } catch {

        res.status(500).send({ msg: error.message });

    }


});

router.get("/signup/:id", async (req, res) => {
    try {

        const signup = await Signup.findById();
        const query = { _id: isObjectId(req.params.id) };
        const result = await Signup.findOne(query);
        res.status(200).send(result);

    } catch (error) {

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ msg: "INvalid Id" });
        }


    }

});



router.post("signup", async (req, res) => {
    try {

        const { body } = request
        const signup = await Signup.create(req.body);
        res.status(200).send(signup);

    } catch (error) {

        res.status(500).send({ msg: error.message });

    }

});


router.put("/signup/:id", async (req, res) => {
    const { id } = req.params;
    const signup = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ msg: "Invalid Id" });
    }

    try {

        const updatedSignup = await Signup.findByIdAndUpdate(id, signup, { new: true });
        res.status(200).send(updatedSignup);

    } catch (error) {

        res.status(500).json({ msg: message.error });

    }



});

router.delete("/signup/:id", async (req, res) => {

    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ msg: "Invalid Id" });
    }


    try {

        await Signup.findByIdAndUpdate(id);
        res.status(200).json({ msg: "Deleted" });


    } catch (error) {

        res.status(500).send({ msg: error.message });


    }



});

export default router