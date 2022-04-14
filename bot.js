const { Telegraf } = require('telegraf');

const TOKEN = require('./config');

const bot = new Telegraf(TOKEN);
// eslint-disable-next-line no-console
console.log('Bot has been started...');

const PASS_LENGHT = 7;
let PASS_OUTPUT;
let PASSWORDS_LIST_LET = ``;
let REMEMBER_PW = ``;
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

function H_ABC(ctx) {
  PASS_OUTPUT = RAND_ABC();
  ctx.reply(PASS_OUTPUT);
  REMEMBER_PW = PASS_OUTPUT;
}

function H_ABC_NUM(ctx) {
  PASS_OUTPUT = RAND_ABC_NUM();
  ctx.reply(PASS_OUTPUT);
  REMEMBER_PW = PASS_OUTPUT;
}

function H_ABC_NUM_ELSE(ctx) {
  PASS_OUTPUT = RAND_ABC_NUM_ELSE();
  ctx.reply(PASS_OUTPUT);
  REMEMBER_PW = PASS_OUTPUT;
}

function START_KEYBOARD(ctx) {
  ctx.reply('Сделайте выбор', {
    reply_markup: {
      kkeyboard: [['Создать новый пароль'], ['Список сохраненных паролей']],
      get keyboard() {
        return this.kkeyboard;
      },
      set keyboard(value) {
        this.kkeyboard = value;
      },
    },
  });
  bot.hears('Список сохраненных паролей', (msg) => {
    if (!PASSWORDS_LIST_LET) {
      msg.reply('Список сохраненных паролей пуст');
    } else {
      msg.reply(`Список сохраненных паролей ${PASSWORDS_LIST_LET}`);
    }
  });
}

function SAVE_PW(msg) {
  PASSWORDS_LIST_LET += `
  ${REMEMBER_PW}`;
  REMEMBER_PW = ``;
  msg.reply('Ваш пароль успешно сохранен');
}

function CREATE_NEW_PASSWORD() {
  bot.hears('Создать новый пароль', (msg) => {
    msg.reply('Выберите вид вашего пароля', {
      reply_markup: {
        kkeyboard: [
          ['Только буквы'],
          ['Буквы и цифры'],
          ['Буквы, цифры и другие знаки'],
          ['Сохранить пароль'],
          ['/start'],
        ],
        get keyboard() {
          return this.kkeyboard;
        },
        set keyboard(value) {
          this.kkeyboard = value;
        },
      },
    });
    bot.hears('Только буквы', (def) => {
      H_ABC(def);
    });
    bot.hears('Буквы и цифры', (def) => {
      H_ABC_NUM(def);
    });
    bot.hears('Буквы, цифры и другие знаки', (def) => {
      H_ABC_NUM_ELSE(def);
    });
    bot.hears('Сохранить пароль', (def) => {
      SAVE_PW(def);
    });
  });
}

// ===============================================================START========================================
bot.start((ctx) => {
  ctx.reply(`Привет, ${ctx.message.from.first_name}`);
  START_KEYBOARD(ctx);
  CREATE_NEW_PASSWORD(ctx);
});

bot.help((ctx) => ctx.reply('Нет'));

// eslint-disable-next-line no-console
console.log('All systems are ok...');
bot.launch();
