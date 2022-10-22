let stringSimilarity = require("string-similarity");
module.exports = async (bot, ingredient, mes) => { //ТУТ ВСЕ ПРОВЕРКИ

    let ingredients = ingredient.split(','),
        userAnswer = mes.split(','),
        percent;

    let uniq_fast = (a) => { //ТУТ ПРОВЕРЯЕМ ПОВТОРКИ
        let seen = {},
            out = [],
            len = a.length,
            j = 0;
        for (let i = 0; i < len; i++) {
            let item = a[i];
            if (seen[item] !== 1) {
                seen[item] = 1;
                out[j++] = item;
            }
        }
        return out;
    };

    const compareArrays = (a, b) => {
        let first,
            second,
            counter = 0;

        b = uniq_fast(b);

        if (a.length > b.length) {
            first = a;
            second = b;
        } else {
            first = b;
            second = a;
        }

        first.forEach(item => {
            second.forEach(secondItem => {
                if (Math.round((stringSimilarity.compareTwoStrings(item.toLowerCase(), secondItem.toLowerCase())) * 100) > 72) { counter++; }
            });
        });

        percent = Math.round(counter * 100 / +first.length);
        return percent > 100 ? 100 : percent;
    };

    return compareArrays(ingredients, userAnswer);
};