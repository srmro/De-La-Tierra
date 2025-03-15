import mongoose from "express";
import { Router } from "express";
import Perennials from "../models/p-model.js"
import { request } from "http";
//perennials

const router = Router();


router.get("/perennials", async(req, res) => {
try {

const perennial = await Perennials.find()
res.status(200).send(perennial)

} catch (error){

res.status(500).send({ msg: error.message });

}
});

router.post("/perennials", async (req, res) => {

try{

const { body } = request
const perennial = await Perennials.create(req.body);
res.status(200).send(perennial);

} catch {

    res.status(500).send({ msg: error.message });

}

});



export default router