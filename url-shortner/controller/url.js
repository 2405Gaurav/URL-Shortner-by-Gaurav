const URL = require('../models/url');
const shortid = require('shortid');

async function handlegeneratenewurl(req, res) {
    try {
        const { url } = req.body;
        if (!url) {
            return res.status(400).json({ error: 'url is not provided' });
        }

        const generatedShortId = shortid.generate();

        const newUrl = await URL.create({
            shortid: generatedShortId,
            redirecturl: url,
            visithistory: []
        });

        return res.status(201).json({ id: generatedShortId });
    } catch (err) {
        console.error('Error creating short URL:', err);
        return res.status(500).json({ error: 'Failed to create short URL' });
    }
}

async function handlereqanalytics(req, res) {
    try {
        const { shortid } = req.params;
        const result = await URL.findOne({ shortid });
        if (!result) {
            return res.status(404).json({ error: 'Short URL not found' });
        }
        return res.json({
            totalclicks: result.visithistory.length,
            analytics: result.visithistory
        });
    } catch (err) {
        console.error('Error fetching analytics:', err);
        return res.status(500).json({ error: 'Failed to fetch analytics' });
    }
}

module.exports = {
    handlegeneratenewurl,
    handlereqanalytics,
};
