const mongoose = require('mongoose');

const userschema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    emailid: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    }
}, { timestamps: true });

const Users = mongoose.models.users || mongoose.model('users', userschema);

module.exports = Users;
