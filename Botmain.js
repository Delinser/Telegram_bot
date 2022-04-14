const { Telegraf } = require('telegraf');

const bot = new Telegraf('5233486239:AAGZJd8NYykKf5YyuENV5Sqf5TbXyS2ncyw');

// eslint-disable-next-line no-console
console.log('Bot started');
bot.start((ctx) => {
  // eslint-disable-next-line no-console
  console.log('frffdrf');
  ctx.hears('r/', (hlp) => hlp.reply('help'));
  ctx.hears('Создать новый пароль', (psw) => {
    psw.reply('hears');
  });
});
// eslint-disable-next-line no-console
console.log('Bot tarted');
bot.launch();
