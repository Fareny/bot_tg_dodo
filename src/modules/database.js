const mongoose = require('mongoose');
const config = require('../../config.json');

module.exports = async () => {
    mongoose.connect(config.mongo_url, { //ПОДКЛЮЧАЕМСЯ К БАЗЕ ДАННЫХ
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    const dbConnection = mongoose.connection;

    dbConnection.on('error', err => {
        console.log('error', err);
    });
    dbConnection.once('open', () => {
        console.log('we are connected');
    });
};