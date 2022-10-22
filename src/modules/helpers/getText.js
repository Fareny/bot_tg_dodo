const textSchema = require('../../schema/text');
module.exports = async (nameText) => {
    const textObj = await textSchema.findOne({ name: nameText });

    return textObj.text;
};
