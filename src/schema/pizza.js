const mongoose = require('mongoose')
const pizza_Schema = mongoose.Schema({
    id: Number,
    img: String,
    type: String,
    name: String,
    quantity: Number,
    ingredients: String,
},
    { versionKey: false });


module.exports = mongoose.model('pizza-composition', pizza_Schema, 'pizza-composition');