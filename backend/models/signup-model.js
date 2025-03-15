import { Timestamp } from "bson";
import mongoose from "mongoose";

const signupSchema = new mongoose.Schema({

    first_name: {
        type: String,
        required: true
    },

    last_name: {
        type: String,
        required: true
    },

    username:{

        type:String,
        required:true

    },

    email: {

        type: String,
        required: true

    },

    password: {

        type: String,
        required: true,
        min: [8, 'Password must be 8 characters long']
        
    }



},


    {
        timestamps: true
    },


)

const Signup = mongoose.model('Signups', signupSchema);

export default Signup;



