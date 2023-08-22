const express = require('express'); // Correct import statement
const db = require('./config/connection'); // Correct import statement
// const routes = require('./routes'); // Correct import statement
const cors = require('cors'); // Correct import statement
const app = express();
const PORT = process.env.PORT || 3000;
const bodyParser = require('body-parser'); // Correct import statement
const bcrypt = require('bcrypt'); // Correct import statement
const jwt = require('jsonwebtoken'); // Correct import statement
const User = require('./models/user'); // Correct import statement
const { ApolloServer } = require('@apollo/server');
const { expressMiddleware } = require('@apollo/server/express4');
//const { authMiddleware } = require('./utils/auth');
const path = require('path');

// Import the two parts of a GraphQL schema
const { typeDefs, resolvers } = require('./schemas');

app.use(cors());

app.use(bodyParser.json());
const server = new ApolloServer({
  typeDefs,
  resolvers,
});
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
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
app.use(cors()); 
//app.use(routes);

// Start the server
// db.once('open', () => {
//   app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
//   });
// });
const startApolloServer = async () => {
  await server.start();
  
  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());
  
  app.use('/graphql', expressMiddleware(server));

  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/dist')));

    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, '../client/dist/index.html'));
    });
  }

  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}/graphql`);
    });
  });
};

// Call the async function to start the server
startApolloServer();