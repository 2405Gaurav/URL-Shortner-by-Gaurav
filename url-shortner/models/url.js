const mongoose = require('mongoose');

const urlschema = new mongoose.Schema({
    shortid: {
        type: String,
        required: true,
        unique: true
    },
    redirecturl: {
        type: String,
        required: true
    },
    visithistory: [
        {
            timestamp: {
                type: Number
            }
        }
    ]
}, {
    timestamps: true
});

const URL = mongoose.model('url', urlschema);

// ✅ Correct this line:
module.exports = URL;
