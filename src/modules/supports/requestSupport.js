module.exports = async (id, msg) => {
    const users = require('../../schema/users');
    const user = await users.findOne({ id: id });
    user.supportText = msg;

    await user.save();
};