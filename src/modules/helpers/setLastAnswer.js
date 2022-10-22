const users = require("../../schema/users");
module.exports = async (id, lastAnswer) => {
    const user = await users.findOne({ id: id });
    user.lastAnswer = await lastAnswer;

    await user.save();
};