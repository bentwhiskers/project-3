const router = require('express').Router();
import loginRoutes from './login.js';
import signupRoutes from './signup.js';

router.use('/login', loginRoutes);
router.use('./signup', signupRoutes);

export default router;