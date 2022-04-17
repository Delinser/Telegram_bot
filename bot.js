const { Telegraf } = require('telegraf');

const TOKEN = `5322032877:AAFefUnUWQ2tSI5NZ92M3vU_eoKeA3NGav8`;

const bot = new Telegraf(TOKEN);
// eslint-disable-next-line no-console
console.log('Bot has been started...');
const numbers = [
  '1',
  '2',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  '11',
  '12',
  '13',
  '14',
  '15',
  '16',
  '17',
  '18',
  '19',
  '20',
  '21',
  '22',
  '23',
  '24',
  '25',
  '26',
  '27',
  '28',
  '29',
  '30',
  '31',
  '32',
  '33',
  '34',
  '35',
  '36',
  '37',
  '38',
  '39',
  '40',
];
let PASS_LENGHT = 7;
let PASS_OUTPUT;
let PASSWORDS_LIST_LET = ``;
let REMEMBER_PW = ``;
let WAIT_TIME;

function Timer() {
  const Data = new Date();
  let Month = Data.getMonth();
  const Day = Data.getDate();
  let Minutes = String(Data.getMinutes());
  const Hour = Data.getHours();
  const Year = Data.getFullYear();
  // eslint-disable-next-line default-case
  switch (Month) {
    case 0:
      Month = '01';
      break;
    case 1:
      Month = '02';
      break;
    case 2:
      Month = '03';
      break;
    case 3:
      Month = '04';
      break;
    case 4:
      Month = '05';
      break;
    case 5:
      Month = '06';
      break;
    case 6:
      Month = '07';
      break;
    case 7:
      Month = '08';
      break;
    case 8:
      Month = '09';
      break;
    case 9:
      Month = '10';
      break;
    case 10:
      Month = '11';
      break;
    case 11:
      Month = '12';
      break;
  }
  if (Minutes.length === 1) Minutes = `0${Minutes}`;
  const Time = `${Day}.${Month}.${Year} ${Hour}:${Minutes} `;
  return Time;
}
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

function START_KEYBOARD(ctx) {
  ctx.reply('Сделайте выбор', {
    reply_markup: {
      kkeyboard: [
        ['Создать новый пароль ➕'],
        ['Список сохраненных паролей 📋'],
        ['Настройка длины пароля ⚙️'],
      ],
      get keyboard() {
        return this.kkeyboard;
      },
      set keyboard(value) {
        this.kkeyboard = value;
      },
    },
  });
  bot.hears('Список сохраненных паролей 📋', (msg) => {
    if (!PASSWORDS_LIST_LET) {
      msg.reply('Список сохраненных паролей пуст');
    } else {
      msg.reply(`Список сохраненных паролей: ${PASSWORDS_LIST_LET}`);
    }
  });
}

function SAVE_PW(msg) {
  WAIT_TIME = Timer();
  PASSWORDS_LIST_LET += `
  ${REMEMBER_PW}  (${WAIT_TIME})`;
  REMEMBER_PW = ``;
  msg.reply('Ваш пароль успешно сохранен');
}

function LENGTH_OF_PW() {
  bot.hears(`Настройка длины пароля ⚙️`, (ctx) => {
    ctx.reply('Введите желаемую длину пароля(от 1 до 40)');
    bot.hears(numbers, (msg) => {
      PASS_LENGHT = msg.message.text;
      msg.reply(`Длина пароля: ${PASS_LENGHT}`);
    });
  });
}

function CREATE_NEW_PASSWORD() {
  bot.hears('Создать новый пароль ➕', (ctx) => {
    ctx.reply('Выберите вид вашего пароля', {
      reply_markup: {
        kkeyboard: [
          ['Только буквы'],
          ['Буквы и цифры'],
          ['Буквы, цифры и другие знаки'],
          ['Сохранить пароль 💾'],
          ['Назад ↩️'],
        ],
        get keyboard() {
          return this.kkeyboard;
        },
        set keyboard(value) {
          this.kkeyboard = value;
        },
      },
    });
    bot.hears('Только буквы', (geg) => {
      PASS_OUTPUT = RAND_ABC(geg);
      geg.reply(PASS_OUTPUT);
      REMEMBER_PW = PASS_OUTPUT;
    });
    bot.hears('Буквы и цифры', (geg) => {
      PASS_OUTPUT = RAND_ABC_NUM();
      geg.reply(PASS_OUTPUT);
      REMEMBER_PW = PASS_OUTPUT;
    });
    bot.hears('Буквы, цифры и другие знаки', (geg) => {
      PASS_OUTPUT = RAND_ABC_NUM_ELSE();
      geg.reply(PASS_OUTPUT);
      REMEMBER_PW = PASS_OUTPUT;
    });
    bot.hears('Сохранить пароль 💾', () => {
      SAVE_PW(ctx);
    });
  });
}
// ===============================================================START=================================================================
bot.start((ctx) => {
  ctx.reply(`Привет, ${ctx.message.from.first_name}`);
  START_KEYBOARD(ctx);
  CREATE_NEW_PASSWORD();
  LENGTH_OF_PW();
  bot.hears('Назад ↩️', () => {
    START_KEYBOARD(ctx);
    CREATE_NEW_PASSWORD();
    LENGTH_OF_PW();
  });
});

bot.help((ctx) => ctx.reply('Нет'));

// eslint-disable-next-line no-console
console.log('All systems are ok...');
bot.launch();
