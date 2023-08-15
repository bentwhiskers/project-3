import express from 'express';
import { genSalt, hash } from 'bcryptjs';
import User, { findOne } from './models/userModel.js';

var app = express();

const signupRoute = app;

signupRoute.post('/signup', async (req, res) => {
    try {
        const { username, password } = req.body;

        // Check if the user exists
        const existingUser = await findOne({ username });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists.' });
        }

        // Hash the password
        const salt = await genSalt(10);
        const hashedPassword = await hash(password, salt);

        // Create a new user
        const newUser = new User({
            username,
            password: hashedPassword
        });

        await newUser.save();

        res.status(201).json({ message: '✅User registered successfully.' });

    } catch (error) {
        res.status(500).json({ message: '❌Server error.' });
    }
});

export default signupRoute;