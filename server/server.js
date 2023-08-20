const express = require('express'); // Correct import statement
const db = require('./config/connection'); // Correct import statement
const routes = require('./routes'); // Correct import statement
const cors = require('cors'); // Correct import statement
const app = express();
const PORT = process.env.PORT || 5000;
const bodyParser = require('body-parser'); // Correct import statement
const bcrypt = require('bcrypt'); // Correct import statement
const jwt = require('jsonwebtoken'); // Correct import statement
const User = require('./models/user'); // Correct import statement

app.use(cors());
app.use(bodyParser.json());

// ...

app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    // Find the user by username
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    // Compare the provided password with the hashed password in the database
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    // If the password is correct, create and send an authentication token
    const token = jwt.sign({ userId: user._id }, 'your-secret-key'); // Replace with your own secret key
    res.status(200).json({ token });

  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

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
