const router = require('express').Router();
import loginRoutes from './loginRoutes.js';
import signupRoutes from './signupRoutes.js';
import userRoutes from './userRoutes.js';
import postRoutes from './postRoutes.js';

router.use('./login', loginRoutes);
router.use('./signup', signupRoutes);
router.use('./user', userRoutes);
router.use('./post', postRoutes);

export default router;