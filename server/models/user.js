const mongoose = ('mongoose');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 5,  
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
