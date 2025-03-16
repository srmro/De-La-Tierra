import mongoose  from "mongoose";

const cropsSchema = new mongoose.Schema({


    name: {

        type: String,
        required: true

    },

    plant_img: {

        type: String,
        required: true
    },

    season: {

        type: String,
        required: true
    },


    info: {

        type: String,
        required: true
    },

    planting: {
        type: String,
        required: true
    },

    space: {
        type: String,
        required: true
    },


    light: {
        type: String,
        required: true
    },
    watering: {
        type: String,
        required: true
    },
    soil: {
        type: String,
        required: true
    },

    fertilizer: {
        type: String,
        required: true
    },


},

    {
        timeStamp: true,
    },

);

const Crop = mongoose.model('Crop', cropsSchema);

export default Crop;