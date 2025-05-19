const express = require('express');
const router = express.Router();
const { handlegeneratenewurl, handlereqanalytics } = require('../controller/url');

// POST route to generate short URL
router.post('/', handlegeneratenewurl);

// GET route for analytics
router.get('/analytics/:shortid', handlereqanalytics);

module.exports = router;
