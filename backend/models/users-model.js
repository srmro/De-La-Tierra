import mongoose from "mongoose";

const userSchema = new mongoose.Schema({

    username: {
        type: String,
        required: true
    },

    bio_info: {
        type: String
    },


    comments: {
        type: String
    },


    posts: {

        type: String

    },


    plants_owned: {
        type: String
    }




},

    {
        timestamps: true
    }

);

const User = mongoose.model('Users', userSchema);
export default User;