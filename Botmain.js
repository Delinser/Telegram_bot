const { Telegraf } = require('telegraf');

const bot = new Telegraf(`5233486239:AAGZJd8NYykKf5YyuENV5Sqf5TbXyS2ncyw`);
bot.command('oldschool', (ctx) => ctx.reply('Hello'));
bot.command('hipster', Telegraf.reply('λ'));
bot.launch();

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
