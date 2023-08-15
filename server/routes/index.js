import express from 'express';
import pkg from 'body-parser';

const { json } = pkg;

import cors from 'cors';
import '../config/connection.js'; // Initialize database

const app = express();
const PORT = 3000;

app.use(json());
app.use(cors());

// home route
app.get('/', (req, res) => {
   
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}🚀`);
});