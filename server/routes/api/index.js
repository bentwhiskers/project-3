const router = require('express').Router();
const postRoutes = require('./postRoutes.js');
const tagRoutes = require('./tagRoutes.js');

router.use('/posts', postRoutes);
router.use('/tags', tagRoutes);

import loginRoutes from './login.js';
import signupRoutes from './signup.js';

router.use('/login', loginRoutes);
router.use('./signup', signupRoutes);

export default router;