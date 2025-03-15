import mongoose from "mongoose";
import { Router } from "express";
import User from "../models/users-model";
//users

const router = Router();

router.get("/users", async(req , res) => {

try {

    const user = await User.find()
    res.status(200).send(user);

} catch (error) {

res.status(500).send({ msg:error.message });

}


});


router.post("/users", async(req, res) =>{
try{

    const { body } = request
    const user = await User.create(req.body);
    res.status(200).send(user);

} catch (error) {

res.status(500).send({ msg: error.message });

}



});

export default router