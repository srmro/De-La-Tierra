import express from 'express';
import { connectDB } from './config/db.js';

const app = express();

app.use(express.json());

const PORT = 3570

app.listen(PORT, () => {
    connectDB();
    console.log(`Server is running on ${PORT}...`);
});

