import express from 'express';
import dotenv from 'dotenv';
import pkg from 'body-parser';
import router from './api/index.js';

dotenv.config();

const { json } = pkg;

import cors from 'cors';
import '../config/connection.js'; // Initialize database

const app = express();
const PORT = 3000;

app.use(json());
app.use(cors()); 

// routes
app.use(router);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}🚀`);
});