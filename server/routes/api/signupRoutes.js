import express from 'express';
import mongoose from 'mongoose';
import User from '../../models/userModel.js';

const signupRoute = express.Router();

signupRoute.post('/api/signup', async (req, res) => {
    try {
      const { email, password } = req.body;
      
      // Check if the email already exists in the database
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ error: 'Email already registered' });
      }
  
      // Create a new user
      const user = new User({ email, password });
      await user.save();
      
      res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Registration failed' });
    }
  });

  export default signupRoute;