const { Telegraf } = require('telegraf');

const TOKEN = require('./config');

const bot = new Telegraf(TOKEN);
// eslint-disable-next-line no-console
console.log('Bot has been started...');

const PASS_LENGHT = 7;
let PASS_OUTPUT;
function RAND_ABC() {
  let result = '';
  const words = 'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';
  // eslint-disable-next-line camelcase
  const max_position = words.length - 1;
  for (let i = 0; i < PASS_LENGHT; i += 1) {
    // eslint-disable-next-line camelcase
    const position = Math.floor(Math.random() * max_position);
    result += words.substring(position, position + 1);
  }
  return result;
}

function RAND_ABC_NUM() {
  let result = '';
  const words = '0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';
  // eslint-disable-next-line camelcase
  const max_position = words.length - 1;
  for (let i = 0; i < PASS_LENGHT; i += 1) {
    // eslint-disable-next-line camelcase
    const position = Math.floor(Math.random() * max_position);
    result += words.substring(position, position + 1);
  }
  return result;
}

function RAND_ABC_NUM_ELSE() {
  let result = '';
  const words = '@#*0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';
  // eslint-disable-next-line camelcase
  const max_position = words.length - 1;
  for (let i = 0; i < PASS_LENGHT; i += 1) {
    // eslint-disable-next-line camelcase
    const position = Math.floor(Math.random() * max_position);
    result += words.substring(position, position + 1);
  }
  return result;
}

bot.start((ctx) => ctx.reply(`Ну здарова, хуйло -  ${ctx.message.from.first_name}`));
bot.help((ctx) => ctx.reply('Хуй тебе, а не помощь'));

bot.hears('ABC', (ctx) => {
  PASS_OUTPUT = RAND_ABC();
  ctx.reply(PASS_OUTPUT);
});

bot.hears('ABC_NUM', (ctx) => {
  PASS_OUTPUT = RAND_ABC_NUM();
  ctx.reply(PASS_OUTPUT);
});

bot.hears('ABC_NUM_ELSE', (ctx) => {
  PASS_OUTPUT = RAND_ABC_NUM_ELSE();
  ctx.reply(PASS_OUTPUT);
});

bot.on('message', (msg) => {
  msg.reply('Не понял');
});
// eslint-disable-next-line no-console
console.log('All systems are ok...');
bot.launch();
