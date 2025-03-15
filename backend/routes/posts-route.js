import mongoose from "mongoose";
import { Router } from "express";
import Post from "../models/posts-model";

//posts

const router = Router();


router.get("/posts", async (req, res) => {
    try {

        const post = await Post.find()
        res.status(200).send(post);

    } catch (error) {

        res.status(500).send({ msg: error.message });

    }
})


router.post("/posts", async (req, res) => {
    try {

        const { body } = request
        const post = await Post.create(req.body);
        res.status(200).send(post)

    } catch (error) {

        res.status(500).send({ msg: error.message });


    }

});


export default router