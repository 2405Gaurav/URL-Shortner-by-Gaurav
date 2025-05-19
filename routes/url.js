const express = require('express');
const router = express.Router();
const { handlegeneratenewurl } = require('../controller/url');
const { handlereqanalytics } = require('../controller/url');

// Corrected route path from './' to '/'
router.post('/', handlegeneratenewurl);
router.get('/analytics/:shortid',handlereqanalytics)

// Correct export
module.exports = router;
