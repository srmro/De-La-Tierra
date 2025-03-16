import { Router, request, response } from "express";
import Crop from "../models/crops-model.js";
import mongoose from "mongoose";

//crops


const router = Router();

router.get("/crops", async (req, res) => {
    try {

        const crop = await Crop.find()
        res.status(200).send(crop);


    } catch (error) {

        res.status(500).send({ msg: error.message });

    }


});

router.get("/crops/:id", async (req, res) => {

    try {

        const crop = await Crop.findById();
        const query = { _id: isObjectId(req.params.id) };
        const result = await Crop.findOne(query);
        res.status(200).send(result);


    } catch (error) {

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ msg: "Invalid Id" });
        }


    }



})


router.post("/crops", async (req, res) => {
    try {

        const { body } = request
        const crop = await Crop.create(req.body);
        res.status(200).send(crop);

    } catch (error) {

        res.status(500).send({ msg: error.message });

    }
});


router.put("/crops/:id", async (req, res) => {
    const { id } = req.params;
    const crop = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ msg: "Invalid Id" });

    }

    try {

        const updatedCrop = await Crop.findByIdAndUpdate(id, crop, { new: true });
        res.status(200).send(updatedCrop);

    } catch (error) {

        res.status(500).json({ msg: message.error });

    }

});


router.delete("/crops/:id", async (req, res) => {

    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(200).json({ msg: "Invalid Id" });
    }

    try {

        await Crop.findByIdAndDelete(id);
        res.status(200).json({ msg: "Deleted" });

    } catch (error) {

        res.status(500).send({ msg: error.message })
    }


});


export default router
