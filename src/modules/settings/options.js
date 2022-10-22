module.exports = {// ТУТ НАХОДЯТСЯ ВСЕ КНОПКИ
    btns: { //Главное меню
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{ text: 'Пицца', callback_data: '/pizza' }, { text: 'Закуски', callback_data: '/snacks' }],
                [{ text: 'Поиск 🔍', callback_data: '/search' }],
                [{ text: 'Настройки ⚙️', callback_data: '/options' }, { text: 'Поддержка 📞', callback_data: '/support' }],
                [{ text: 'Как это работает? 🤖', callback_data: '/how' }],
            ]
        })
    },

    setMode: { //использовать картинку или нет
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{ text: 'Вкл', callback_data: '/no' }, { text: 'Выкл', callback_data: '/yes' }],
                [{ text: 'Ок', callback_data: '/ok' }]
            ]
        })
    },

    againFood: { //кнопка продолжить (после проверки)
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{ text: 'Продолжить', callback_data: '/againFood' }],
                [{ text: 'Стоп', callback_data: '/stop' }]
            ]
        })
    },

    okay: { //все кнопки Ok
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{ text: 'Ок', callback_data: '/agree' }]
            ]
        })
    },

    howOption: { //все кнопки Ok
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{ text: 'Ок', callback_data: '/agree' }, { text: 'Список', callback_data: '/list' }]
            ]
        })
    },

    naturally: { //Понятно
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{ text: 'Понятно', callback_data: '/naturally' }]
            ]
        })
    },
    support: { //кнопка продолжить (после проверки)
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{ text: 'Ответить', callback_data: '/supportReply' }]
            ]
        })
    },
};