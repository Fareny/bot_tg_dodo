const Users = require("../../schema/users");
module.exports = async (id, name, lastAnswer = '', text = '', imgMode = true) => {

    const userBD = await Users.findOne({ id: id });

    if (!userBD) {
        const newUser = new Users({
            id: id,
            name: name,
            lastAnswer: lastAnswer,
            supportText: text,
            imgMode: imgMode,
            listCollection: []
        });
        await newUser.save();
    }

};