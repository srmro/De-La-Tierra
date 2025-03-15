import { Router } from "express";
import Annual from "../models/a-model.js"
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


router.post("/annuals", async (req, res) => {

    try {

        const { body } = request
        const annual = await Annual.create(req.body);
        res.status(200).send(annual);

    } catch (error) {

        res.status(500).send({ msg: error.message });

    }




});

export default router