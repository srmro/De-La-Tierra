import express from 'express';
import { connectDB } from './config/db.js'; //importing the db connection file

const app = express();

app.use(express.json());

const PORT = 3570

app.listen(PORT, () => {
    connectDB();   //checking to see if the db is connected
    console.log(`Server is running on ${PORT}...`); //checking if we're connected to our port
});
