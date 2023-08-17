const mongoose = ('mongoose');

const userSchema = new mongoose.Schema({
  username: {
        type: String,
        required: true,
        unique: true
    },
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

export default User;
