const router = require('express').Router();
const api = require('./api');


router.use('/api', api);

export default router;

