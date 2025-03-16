import { request, response } from 'express';
import { Router } from "express";
import Annual from "../models/a-model.js"
import mongoose from 'mongoose';
//annuals

const router = Router();


router.get("/annuals", async (req, res) => {
    try {

        const annual = await Annual.find()
        res.status(200).send(annual);

    } catch (error) {

        res.status(500).send({ msg: error.message });

    }

});

router.get("/annauls/:id", async (req, res) => {

    try {

        const annual = await Annual.findById();
        const query = { _id: isObjectId(req.params.id) };
        const result = await Annual.findOne(query);
        res.status(200).send(result);

    } catch (error) {

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ msg: "Invalid Id" });
        }


    }

});



router.post("/annuals", async (req, res) => {

    try {

        const { body } = request
        const annual = await Annual.create(req.body);
        res.status(200).send(annual);

    } catch (error) {

        res.status(500).send({ msg: error.message });

    }

});


router.put("annuals/:id", async (req, res) => {
    const { id } = req.params;
    const annual = req.body;


    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ msg: "Invalid Id" });

    }

    try {

        const updatedAnnual = await Annual.findByIdAndUpdate(id, annual, { new: true });
        res.status(200).send(updatedAnnual);


    } catch (error) {

        res.status(500).json({ msg: message.error });


    }

});


router.delete("/annuals/:id", async (req, res) => {

    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ msg: "Invalid Id" });

    }

    try {

        await Annual.findByIdAndDelete(id);
        res.status(200).json({ msg: "Deleted" });


    } catch (error) {

        res.status(500).send({ msg: error.message });

    }

});


export default router