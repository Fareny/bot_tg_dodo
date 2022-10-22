const telegramApi = require('node-telegram-bot-api');
const { btns, setMode } = require('./src/modules/settings/options');
const config = require('./config.json');
const token = config.token;
const bot = new telegramApi(token, { polling: true });

const start = () => { //ОТСЮДА ВСЁ ЗАПУСКАЕТСЯ)
    require('./src/modules/database')();
    require('./src/modules/settings/commands')(bot);
    require('./src/modules/greeting')(bot, btns, setMode);
    require('./src/modules/callback')(bot);
};

start();
