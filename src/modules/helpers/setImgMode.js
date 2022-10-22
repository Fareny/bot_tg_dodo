const users = require('../../schema/users');
module.exports = async (id, imgMode) => {
    const user = await users.findOne({ id: id });
    user.imgMode = imgMode;

    await user.save();
};