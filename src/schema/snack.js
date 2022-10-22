const mongoose = require('mongoose');
const snack_Schema = mongoose.Schema({
    id: Number,
    img: String,
    type: String,
    name: String,
    quantity: Number,
    ingredients: String,
},
    { versionKey: false });


module.exports = mongoose.model('snack-composition', snack_Schema, 'snack-composition');