const { naturally } = require('../settings/options');
const config = require('../../../config.json');
const botId = config.channelSupportId;

module.exports = async (bot, msg) => {

    let userId = +msg.message.text.split('\n')[0].match(/\d+/g)[0];

    bot.sendMessage(botId, 'Напишите ответ пользователю:', {
        reply_markup: {
            force_reply: true,
        }
    }).then(anwer => {
        const replyListenerId = bot.onReplyToMessage(anwer.chat.id, anwer.message_id, async msg => {
            await bot.removeReplyListener(replyListenerId);
            let message = await bot.sendMessage(userId, `
<======================>
Ответ поддержки: ${msg.text}
<======================>`, naturally);
            await bot.pinChatMessage(userId, message.message_id);
        });
    });
};