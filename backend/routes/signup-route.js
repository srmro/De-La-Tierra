import { Router } from "express";
import Signup from "../models/signup-model";



const router = Router();


router.get("/signup", async (req, res) => {
    try {

        const signup = await Signup.find()
        res.status(200).send(signup);

    } catch {

        res.status(500).send({ msg: error.message });

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

export default router