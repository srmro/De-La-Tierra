import mongoose from "express";
import { Router, request, response } from "express";
import Perennials from "../models/p-model.js"

//perennials

const router = Router();


router.get("/perennials", async (req, res) => {
    try {

        const perennial = await Perennials.find()
        res.status(200).send(perennial)

    } catch (error) {

        res.status(500).send({ msg: error.message });

    }
});


router.get("/perennials/:id", async (req, res) => {

    try {

        const perennial = await Perennials.findById();
        const query = { _id: isObjectId(req.params.id) };
        const result = await Perennials.findOne(query);
        res.status(200).send(result);


    } catch (error) {

        if (!mongoose.Types.isObjectId.isValid(id)) {
            return res.status(400).json({ msg: "Invalid Id" });
        }

    }


});




router.post("/perennials", async (req, res) => {

    try {

        const { body } = request
        const perennial = await Perennials.create(req.body);
        res.status(200).send(perennial);

    } catch {

        res.status(500).send({ msg: error.message });

    }

});

router.put("perennials/:id", async (req, res) => {

    const { id } = req.params;
    const perennial = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ msg: "Invalid Id" });

    }

    try {

        const updatedPerennial = await Perennials.findByIdAndUpdate(id, perennial, { new: true });
        res.status(200).send(updatedPerennial);


    } catch (error) {

        res.status(500).json({ msg: message.error });

    }


});

router.delete("/perennials/:id", async (req, res) => {

    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ msg: "Invalid Id" });
    }

    try {

        await Perennials.findByIdAndDelete(id);
        res.status(200).json({ msg: "Deleted" });

    } catch (error) {

        res.status(500).send({ msg: error.message });

    }


})



export default router