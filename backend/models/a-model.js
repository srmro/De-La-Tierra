import mongoose from "mongoose"; //creating a schema for annuals

const aSchema = new mongoose.Schema({

    name: {

        type: String,
        required: true

    },

    plant_img:{

        type: String,
        required: true
    },
    
    season:{

        type: String,
        required: true
    },

    
    info:{

        type: String,
        required: true
    },
    
    planting: {

        type: String,
        required: true
    },
    
    care:{

        type: String,
        required: true

    }

},

{
    timeStamp: true,
}

);

const Annual = mongoose.model('Annual', aSchema);