const mongoose = require('mongoose')
const text_Schema = mongoose.Schema({
    name: String,
    text: String,
},
    { versionKey: false });


module.exports = mongoose.model('text', text_Schema, 'text');