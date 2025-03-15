import mongoose from "mongoose";

const postSchema = new mongoose.Schema({


    username: {

        type: String,
        required: true

    },


    title: {
        type: String,
        required: true
    },


    description: {

        type: String,
        required: true

    },

    post_img: {

        type: String,

    }

},

    {
        timestamps: true
    }


);


const Post = mongoose.model('Posts', postSchema);

export default Post;
