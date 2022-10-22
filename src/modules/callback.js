const { btns, setMode, okay, howOption } = require('./settings/options');
const getText = require('./helpers/getText');
const setLastAnswer = require('./helpers/setLastAnswer');
const setImgMode = require('./helpers/setImgMode');

module.exports = (bot) => { //ТУТ МЫ ПРИНИМАЕМ ВСЕ CALLBACK ОТ КНОПОК

    bot.on('callback_query', async msg => {
        const data = msg.data;
        const chatId = msg.message.chat.id;

        switch (data) {
            case '/search':
                require('./search.js')(bot, chatId, msg.from.id, data);
                break;
            case '/pizza':
                setLastAnswer(msg.from.id, data);
                require('./outFood')(bot, chatId, msg.from.id, data);
                break;
            case '/againFood':
                require('./outFood')(bot, chatId, msg.from.id, data, true);
                break;
            case '/stop':
                await bot.sendSticker(chatId, 'https://tlgrm.ru/_/stickers/a20/83d/a2083d67-fa8b-4d7d-bd4a-914cba15a041/30.webp');
                await bot.sendMessage(chatId, await getText('textMenu'), btns);
                break;
            case '/snacks':
                setLastAnswer(msg.from.id, data);
                require('./outFood')(bot, chatId, msg.from.id, data);
                break;
            case '/support':
                await require('./supports/support')(bot, chatId);
                break;
            case '/supportReply':
                require('./supports/answerSupport')(bot, msg);
                break;
            case '/naturally':
                await bot.sendMessage(chatId, 'На чём остановились? 😎', btns);
                await bot.unpinAllChatMessages(chatId);
                break;
            case '/how':
                bot.sendMessage(chatId, await getText('textHelp'), howOption);
                break;
            case '/options':
                await bot.sendMessage(chatId, `
Если хотите посложение, то можете выключить изображения.`, setMode);
                await require('./helpers/getImgMode')(chatId);
                break;
            case '/list':
                bot.sendMessage(chatId, await getText('textList'), okay);
                break;
            case '/yes':
                setImgMode(chatId, false);
                await bot.sendSticker(chatId, 'https://tlgrm.ru/_/stickers/a20/83d/a2083d67-fa8b-4d7d-bd4a-914cba15a041/41.webp');
                await bot.sendMessage(chatId, `
Готово!`, btns);
                break;
            case '/no':
                setImgMode(chatId, true);
                await bot.sendSticker(chatId, 'https://tlgrm.ru/_/stickers/a20/83d/a2083d67-fa8b-4d7d-bd4a-914cba15a041/18.webp');
                await bot.sendMessage(chatId, `
Готово!`, btns);
                break;
            case '/ok':
            case '/agree':
                bot.sendSticker(chatId, 'https://tlgrm.ru/_/stickers/a20/83d/a2083d67-fa8b-4d7d-bd4a-914cba15a041/19.webp', btns);
                break;
        }
    });
};