const snacks = require('../../schema/snack');
module.exports = async id => {
    const Snack = await snacks.findOne({ id: id });

    return Snack;
};