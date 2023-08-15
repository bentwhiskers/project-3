import pkg from 'mongoose';
const { connect, connection } = pkg;

const MONGODB_URI = 'mongodb://localhost:27017/userDB';  // Change this to your connection string

connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("Connected to MongoDB");
});

export default db;


