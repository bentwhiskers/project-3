const express = ('express');
const db = require('./config/connection');
const routes = ('./routes');
import cors from 'cors';
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors()); 
app.use(routes);


// Start the server
db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    });
});

