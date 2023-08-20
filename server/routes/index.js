const express = require('express');
const cors = require('cors');
const api = require('./api');

const app = express();

app.use(cors());

// Mount the '/api' prefix for your API routes
app.use('/api', api);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


