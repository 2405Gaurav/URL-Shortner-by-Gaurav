const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema({
    shortid: {
        type: String,
        required: true,
        unique: true
    },
    redirecturl: {
        type: String,
        required: true
    },
    visithistory: [{
        timestamp: {
            type: Date,
            default: Date.now
        }
    }]
}, { timestamps: true });

const URL = mongoose.models.url || mongoose.model('url', urlSchema);

module.exports = URL;