import express from 'express';
import { genSalt, hash } from 'bcryptjs';
import User from './models/userModel.js';

var app = express();

const registerRoute = app;

registerRoute.post('/register', async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if the user with the provided email exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User with this email already exists.' });
        }

        // Hash the password
        const salt = await genSalt(10);
        const hashedPassword = await hash(password, salt);

        // Create a new user
        const newUser = new User({
            email,
            password: hashedPassword
        });

        await newUser.save();

        res.status(201).json({ message: '✅ User registered successfully.' });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: '❌ Server error.' });
    }
});

export default registerRoute;
