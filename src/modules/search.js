const outFood = require('./outFood');
let pizzas = require('../schema/pizza');
let snacks = require('../schema/snack');
let stringSimilarity = require("string-similarity");

module.exports = async (bot, chatId, userId, data) => {

    const pizzasArr = await pizzas.find();
    const snacksArr = await snacks.find();
    const productArray = pizzasArr.concat(snacksArr);

    bot.sendMessage(chatId, ('Введите название продукта, который хотите найти:'), {
        reply_markup: {
            force_reply: true,
        },
    }).then(answer => {
        const replyListenerId = bot.onReplyToMessage(answer.chat.id, answer.message_id, async msg => {
            bot.removeReplyListener(replyListenerId);
            let finding = false;

            productArray.forEach(element => {
                if (Math.round((stringSimilarity.compareTwoStrings(element.name.toLowerCase(), msg.text.toLowerCase())) * 100) > 80) {
                    finding = true;

                    const isSearch = {
                        status: true,
                        productName: element.name,
                        productType: element.type
                    };

                    outFood(bot, chatId, userId, data, false, isSearch);
                    return;
                }
            });
            if (!finding) {
                bot.sendMessage(chatId, 'Ничего не найдено!');
            }
        });
    });
};