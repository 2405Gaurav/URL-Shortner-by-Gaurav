const express = require('express');
const urlRouter = require('./routes/url');
const { connecttomongodb } = require('./connect');
const URL = require('./models/url');

const app = express();
const port = 3000;

// Middleware
app.use(express.json());

// Enable CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
});

// Routes
app.use('/url', urlRouter);

// Redirect route with visit tracking
app.get('/:shortid', async (req, res, next) => {
    try {
        const { shortid } = req.params;

        const entry = await URL.findOneAndUpdate(
            { shortid },
            { $push: { visithistory: { timestamp: Date.now() } } },
            { new: true }
        );

        if (!entry) {
            return res.status(404).json({ error: 'Short URL not found' });
        }

        res.redirect(entry.redirecturl);
    } catch (err) {
        next(err);
    }
});

// Analytics route
app.get('/analytics/:shortid', async (req, res, next) => {
    try {
        const { shortid } = req.params;

        const entry = await URL.findOne({ shortid });

        if (!entry) {
            return res.status(404).json({ error: 'Short URL not found' });
        }

        res.json({
            totalClicks: entry.visithistory.length,
            history: entry.visithistory
        });
    } catch (err) {
        next(err);
    }
});

// Global error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
});

// Connect to MongoDB and start server
const startServer = async () => {
    try {
        await connecttomongodb('mongodb://localhost:27017/url-short');
        console.log('✅ MongoDB Connected');
        
        app.listen(port, () => {
            console.log(`🚀 Server started on http://localhost:${port}`);
        });
    } catch (err) {
        console.error('❌ Failed to start server:', err);
        process.exit(1);
    }
};

startServer();
