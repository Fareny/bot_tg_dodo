module.exports = (bot) => { //ВСЕ КОММАНДЫ
    bot.setMyCommands(
        [
            // { command: '/start', description: 'Меню' },
            { command: '/menu', description: 'Меню' },
            { command: '/mode', description: 'Использовать картинки?' },
            { command: '/help', description: 'Помощь' },
        ]
    );
};