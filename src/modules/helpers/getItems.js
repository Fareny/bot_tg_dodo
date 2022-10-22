
module.exports = async (answer, food) => { //ПОЛУЧАЕМ ИНГРИДИЕНТЫ ПИЦЦЫ ИЛИ ЗАКУСКИ 

    let product,
        nameFood,
        quantity,
        ingredients = [],
        type,
        img;

    if (answer === '/pizza') {
        product = await require('./getPizza')(getRandomInRange(0, 29));

        nameFood = product.name;
        quantity = product.quantity;
        ingredients = product.ingredients;
        img = product.img;
        type = product.type;

    } else if (answer === '/snacks') {
        product = await require('./getSnack')(getRandomInRange(0, 17));

        nameFood = product.name;
        quantity = product.quantity;
        ingredients = product.ingredients;
        img = product.img;
        type = product.type

    }

    return {
        nameFood,
        quantity,
        ingredients,
        img,
        type
    };

    function getRandomInRange(min, max) { //Получаем рандомное число в диапазоне
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
};