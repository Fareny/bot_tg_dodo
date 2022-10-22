const pizzas = require('../../schema/pizza');
module.exports = async id => {
    const Pizza = await pizzas.findOne({ id: id });

    return Pizza;
};