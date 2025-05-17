const express = require('express');
const router = express.Router();
const { handlegeneratenewurl } = require('../controller/url');

// Corrected route path from './' to '/'
router.post('/', handlegeneratenewurl);

// Correct export
module.exports = router;
