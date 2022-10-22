const mongoose = require('mongoose');
const { support } = require('../modules/settings/options');
const users_Schema = mongoose.Schema({
    id: Number,
    name: String,
    lastAnswer: String,
    supportText: String,
    imgMode: {
        type: Boolean,
        default: true
    },
    listCollection: Array
},
    { versionKey: false });

module.exports = mongoose.model('users', users_Schema, 'users');