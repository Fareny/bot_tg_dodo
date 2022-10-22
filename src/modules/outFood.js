const users = require('../schema/users');
let pizzas = require('../../src/schema/pizza');
let snacks = require('../../src/schema/snack');

module.exports = async (bot, chatId, userId, data, isReply = false, isSearch = { status: false, productName: '', productType: '' }) => {

    const user = await users.findOne({ id: userId });
    let answer = isReply ? user.lastAnswer : data;
    let imgMode = user.imgMode;
    let food;

    //ПОЛУЧАЕМ ПИЦЦУ ИЛИ ЗАКУСКУ
    answer === '/pizza' ? food = await pizzas.find() : food = await snacks.find();
    //ПОЛУЧАЕМ ИНГРИДИЕНТЫ

    let ingredient;
   
    if (isSearch.status) {
        const product = isSearch.productType === 'pizza' ? await pizzas.findOne({ name: isSearch.productName }) : await snacks.findOne({ name: isSearch.productName });
        
        const nameFood = product.name;
        const quantity = product.quantity;
        const ingredients = product.ingredients;
        const img = product.img;
        const type = product.type;

        ingredient = {
            nameFood,
            quantity,
            ingredients,
            img,
            type
        };
    } else {
        ingredient = await require('./helpers/getItems')(answer, food);
    }
    // ВЫВОДИМ
    await require('./againStart')(chatId, imgMode, bot, answer, ingredient);
};