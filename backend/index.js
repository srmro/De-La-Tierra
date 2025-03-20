import express from 'express';
import cors from 'cors'
import mongoose from 'mongoose';
import aroute from './routes/a-route.js'
import proute from './routes/p-route.js'
import crop from './routes/crop-route.js'
import user from './routes/users-route.js'


import { connectDB } from './config/db.js'; //importing the db connection file
import dotenv from "dotenv"


dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(aroute);
app.use(proute);
app.use(crop);
app.use(user);

const PORT = 3570

app.listen(PORT, () => {
    connectDB();   //checking to see if the db is connected
    console.log(`Server is running on ${PORT}...`); //checking if we're connected to our port
});

app.get("/", (req, res) => {
    res.status(200).json({message:"Connected to the server!"});
} );