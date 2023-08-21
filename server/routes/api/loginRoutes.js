// import express from 'express';
// import mongoose from 'mongoose';
// import bcrypt from 'bcryptjs';
// import jwt from 'jsonwebtoken';
// import User from '../../models/userModel.js';

// const loginRoute = express.Router();

// const JWT_SECRET = "";


// loginRoute.post('/login', async (req, res) => {
//     const { username, password } = req.body;

//     const user = await User.findOne({ username });
//     if (!user) {
//         return res.status(400).json({ message: 'User does not exist' });
//     }

//     const isPasswordValid = await bcrypt.compare(password, user.password);
//     if (!isPasswordValid) {
//         return res.status(401).json({ message: 'Invalid credentials' });
//     }

//     const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '1h' });

//     res.json({ message: 'Logged in successfully', token });
// });

// export default loginRoute;