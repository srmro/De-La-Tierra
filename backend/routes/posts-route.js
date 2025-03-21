import mongoose from "mongoose";
import { Router, request,response } from "express";
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
});


router.get("/posts/:id", async (req, res) => {


    try {

        const annual = await Post.findById();
        const query = { _id: isObjectId(req.params.id) };
        const result = await Post.findOne(query);
        res.status(200).send(result);

    } catch (error) {

        if (!mongoose.Types.ObjectId.isValid(id)) {

            return res.status(400).json({ msg: "Invalid Id" });
        }


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

router.put("/posts/:id", async (req, res) => {
    const { id } = req.params;
    const post = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ msg: "Invalid Id" });
    }

    try {

        const updatedPost = await Post.findByIdAndUpdate(id, post, { new: true });
        res.status(200).send(updatedPost);

    } catch (error) {

        res.status(500).json({ msg: message.error });


    }


});


router.delete("/posts/:id", async (req, res) => {

    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ msg: "Invalid Id" })
    }

    try {

        await Post.findByIdAndDelete(id);
        res.status(200).json({ msg: "Deleted" });


    } catch (error) {

        res.status(500).send({ msg: error.message });

    }

});


export default router