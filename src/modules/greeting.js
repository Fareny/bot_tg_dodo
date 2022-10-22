const writeUsers = require('./helpers/checkUsers');
const { whoAmI, setMode } = require('./settings/options');
const getText = require('../modules/helpers/getText');

module.exports = (bot, btns) => { //ПРИВЕТСТВИЕ И МЕНЮ

    bot.on('message', async msg => {
        const text = msg.text;
        const chatId = msg.chat.id;

        switch (text) {
            case '/start':
                bot.sendMessage(chatId, `
Привет, ${msg.chat.first_name}, я помогу тебе выучить составы пицц, закусок и все остальное!`, btns);
                writeUsers(msg.from.id, msg.chat.first_name);
                break;
            case '/menu':
                await bot.sendSticker(chatId, 'https://tlgrm.ru/_/stickers/a20/83d/a2083d67-fa8b-4d7d-bd4a-914cba15a041/30.webp');
                await bot.sendMessage(chatId, await getText('textMenu'), btns);
                break;
            case '/mode':
                bot.sendMessage(chatId, `
Если хотите посложение, то можете выключить картинки.`, setMode);
                break;
            case '/help':
                bot.sendMessage(chatId, 'Помощь уже здесь!');
                break;
        }
    });
};