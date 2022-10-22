const users = require('../../schema/users');
module.exports = async (id) => {
    const user = await users.findOne({ id: id });

    return user.imgMode;
};