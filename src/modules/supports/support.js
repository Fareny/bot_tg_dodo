const getText = require('../helpers/getText');
const config = require('../../../config.json');
const id = config.channelSupportId;
const { btns, support } = require('../settings/options');
const requestSupport = require('./requestSupport');

module.exports = async (bot, chatId) => {

    bot.sendMessage(chatId, await getText('textSupport'), {
        reply_markup: {
            force_reply: true,
        },
    }).then(answer => {
        const replyListenerId = bot.onReplyToMessage(answer.chat.id, answer.message_id, async msg => {

            await bot.removeReplyListener(replyListenerId);
            await bot.sendSticker(msg.from.id, 'https://tlgrm.ru/_/stickers/a20/83d/a2083d67-fa8b-4d7d-bd4a-914cba15a041/6.webp', btns);
            await bot.sendMessage(id, `
Айди пользователя: ${msg.from.id}
Имя пользователя: ${msg.chat.first_name}
Никнейм: ${typeof msg.chat.username === 'undefined' ? 'нет' : '@' + msg.chat.username}
Текст сообщения: ${msg.text}`, support);
            requestSupport(answer.chat.id, msg.text);
        });
    });
    return chatId;
};