const { Telegraf } = require('telegraf');

console.log('Bot has been started...')

const bot = new Telegraf('5233486239:AAGZJd8NYykKf5YyuENV5Sqf5TbXyS2ncyw')
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

let USER_TEXT = ["Пошел нахуй", "пошел на хуй", "Ты пидорас"];
let BOT_TEXT = ["Да иди ты нахуй", "Пошел ты", "Пидорас, блять", "Еблан ебаный", "Ну ты и пидорас", "Ну и иди нахуй", "ББ хуесос"];

bot.start((ctx) => ctx.reply('Ну здарова, хуйло'));
bot.help((ctx) => ctx.reply('Хуй тебе, а не помощь'));
bot.hears(USER_TEXT, (ctx) => ctx.reply(BOT_TEXT[getRandomInt(0, 6)]));
bot.on('message', (msg) => {
  const chatId = msg.chat.id;

  msg.reply(BOT_TEXT[getRandomInt(0, 6)], {
    reply_markup: {
      kkeyboard: [['Пошел на хуй']],
      get keyboard() {
        return this.kkeyboard;
      },
      set keyboard(value) {
        this.kkeyboard = value;
      },
    },
  });
  console.log(msg.message.text);
});
bot.on('text', (ctx) => ctx.reply('Нихуя не понял'));
bot.launch();
