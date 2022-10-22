const { againFood } = require('./settings/options');
const checkIngredient = require('./helpers/getPercent');
module.exports = async (chatId, imgMode, bot, answer, { nameFood, quantity, img, ingredients, type }) => {
    //ОТСЮДА МЫ ВСЁ ВЫВОДИМ И ПРИНИМАЕМ ОТВЕТ ПОЛЬЗОВАТЕЛЯ
    // console.log(ingredients);

    imgMode ? await bot.sendPhoto(chatId, img) : ''; //Добавить картинку или нет
    await bot.sendMessage(chatId, ` 
${type === 'pizza' ? 'Пицца:' : 'Закуска:'} ${nameFood}
Ингредиентов: ${quantity}
Напишите ответ и бот сразу его проверит!`, {
        reply_markup: {
            force_reply: true
        }
    }).then(answer => {
        const replyListenerId = bot.onReplyToMessage(answer.chat.id, answer.message_id, async msg => {
            await bot.removeReplyListener(replyListenerId);
            const totalAnswer = await checkIngredient(bot, ingredients, msg.text);

            await bot.sendMessage(chatId, `
Вы справились на ${Math.round(totalAnswer)}%
Вот и проверочка: ${ingredients}`);
            setTimeout(async () => {
                await bot.sendSticker(chatId, 'https://chpic.su/_data/stickers/s/steamboy_vk/steamboy_vk_025.webp');
                await bot.sendMessage(chatId, 'Хотите продолжить?', againFood);
            }, 2000);
        });
    });
};