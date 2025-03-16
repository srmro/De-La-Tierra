import mongoose from "mongoose";
import { Router, request, response } from "express";
import User from "../models/users-model.js";
//users

const router = Router();

router.get("/users", async (req, res) => { //getting all the users

    try {

        const user = await User.find()
        res.status(200).send(user);

    } catch (error) {

        res.status(500).send({ msg: error.message });

    }


});


router.get("/users/:id", async (req, res) => {

    try {
        const user = await User.findById();
        const query = { _id: isObjectId(req.params.id) };
        const result = await User.findOne(query);
        res.status(200).send(result);
    } catch (error) {

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).json({ msg: "Invalid Id" });
        }

    }

});


router.post("/users", async (req, res) => { //posting new users
    try {

        const { body } = request
        const user = await User.create(req.body);
        res.status(200).send(user);

    } catch (error) {

        res.status(500).send({ msg: error.message });

    }

});


router.put("/users/:id", async (req, res) => { //updating users
    const { id } = req.params;
    const user = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) { //finding if the object id is from the mongoose db
        return res.status(404).json({ msg: "Invalid Id" });
    }

    try {

        const updatedUser = await User.findByIdAndUpdate(id, user, { new: true });
        res.status(200).send(updatedUser);

    } catch (error) {

        res.status(500).json({ msg: message.error });

    }
});

router.delete("/users/:id", async (req, res) => { //deleting users

    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ msg: "Invalid Id" });
    }

    try {

        await User.findByIdAndDelete(id);
        res.status(200).json({ msg: "Deleted" });

    } catch (error) {

        res.status(500).send({ msg: error.message });

    }

});

export default router