const { Telegraf } = require('telegraf');

const bot = new Telegraf('5233486239:AAGZJd8NYykKf5YyuENV5Sqf5TbXyS2ncyw');
// eslint-disable-next-line no-console
console.log('Bot has been started...');

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

// eslint-disable-next-line camelcase
function str_rand() {
  let result = '';
  const words = '0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';
  // eslint-disable-next-line camelcase
  const max_position = words.length - 1;
  for (let i = 0; i < 7; i += 1) {
    // eslint-disable-next-line camelcase
    const position = Math.floor(Math.random() * max_position);
    result += words.substring(position, position + 1);
  }
  return result;
}

const USER_KEY_WORDS = ['нахуй', 'хуй', 'пидорас'];
const BOT_TEXT = [
  'Да иди ты нахуй',
  'Пошел ты',
  'Пидорас, блять',
  'Еблан ебаный',
  'Ну ты и пидорас',
  'Ну и иди нахуй',
  'ББ хуесос',
];
let BOT_TEXT_R;
let USER_MESSAGE;
let RAND;

bot.start((ctx) => ctx.reply(`Ну здарова, хуйло -  ${ctx.message.from.first_name}`));
bot.help((ctx) => ctx.reply('Хуй тебе, а не помощь'));

bot.hears('/r', (ctx) => {
  RAND = str_rand();
  ctx.reply(`https://prnt.sc/${RAND}`);
  ctx.reply(`1`, {
    reply_markup: {
      keyboard: [['/r']],
    },
  });
});

bot.on('message', (msg) => {
  if (msg.message.text === USER_KEY_WORDS) {
    BOT_TEXT_R = BOT_TEXT[getRandomInt(0, 6)];
    msg.reply(BOT_TEXT_R);
    // eslint-disable-next-line no-console
    console.log(`BOT_TEXT: ${BOT_TEXT_R}`);
  }

  USER_MESSAGE = `User_Message: ${msg.message.text}`;

  // eslint-disable-next-line no-restricted-globals
  if (!isNaN(msg.message.text)) {
    msg.reply(`https://prnt.sc/${msg.message.text}`);
  } else {
    msg.reply(`Нихуя не понял`);
  }

  // eslint-disable-next-line no-console
  console.log(USER_MESSAGE);
});
// eslint-disable-next-line no-console
console.log('All systems are ok...');
bot.launch();
