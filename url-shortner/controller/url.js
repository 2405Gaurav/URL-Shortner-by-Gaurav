const URL = require('../models/url');
const shortid = require('shortid');

// Function to handle short URL generation
async function handlegeneratenewurl(req, res) {
    const body = req.body;

    if (!body.url) {
        return res.status(400).json({ error: 'url is not provided' });
    }

    const generatedShortId = shortid.generate(); // correct use of shortid

    await URL.create({
        shortid: generatedShortId,
        redirecturl: body.url,
        visithistory: []
    });

    return res.json({ id: generatedShortId });
}

// Correct export syntax
module.exports = {
    handlegeneratenewurl,
};
