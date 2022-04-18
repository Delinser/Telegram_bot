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
let PASS_LENGHT = 10;
let PASS_OUTPUT;
let PASSWORDS_LIST_LET = ``;
let REMEMBER_PW = ``;
let WAIT_TIME;
let count = 1;
let comm = ' ';
let detect = true;
let tranfer;
// eslint-disable-next-line no-unused-vars
const KEY_WORDS = [
  'Создать новый пароль +',
  'Список сохраненных паролей 📋',
  `Настройка длины пароля(${PASS_LENGHT}) ⚙️`,
  'Список сохраненных паролей 📋',
  numbers,
  'Только буквы 🔤',
  'Буквы и цифры 🔤+🔟',
  'Буквы, цифры и другие знаки 🔤+🔟+#️⃣',
  'Сохранить пароль 💾',
  'Назад ↩️',
  '',
];

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
  const Time = `${Day}.${Month}.${Year} ${Hour}:${Minutes}`;
  return Time;
}
function MESSAGE_DETECT() {
  detect = true;
  // eslint-disable-next-line no-console
  console.log(`${detect} detect`);
  return detect;
}

function COMM_REMEMBER() {
  MESSAGE_DETECT();
  bot.hears(MESSAGE_DETECT, (msg) => {
    comm = msg.message.text;
    // eslint-disable-next-line no-console
    console.log(msg.message.text);
  });
  // eslint-disable-next-line no-console
  console.log(`${comm} comm`);
  return comm;
}

function RAND_ABC() {
  let pw = '';
  const words = 'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';
  // eslint-disable-next-line camelcase
  const max = words.length - 1;
  for (let i = 0; i < PASS_LENGHT; i += 1) {
    // eslint-disable-next-line camelcase
    const position = Math.floor(Math.random() * max);
    pw += words.substring(position, position + 1);
  }
  return pw;
}

function RAND_ABC_NUM() {
  let pw = '';
  const words = '0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';
  // eslint-disable-next-line camelcase
  const max = words.length - 1;
  for (let i = 0; i < PASS_LENGHT; i += 1) {
    // eslint-disable-next-line camelcase
    const position = Math.floor(Math.random() * max);
    pw += words.substring(position, position + 1);
  }
  return pw;
}

function RAND_ABC_NUM_ELSE() {
  let pw = '';
  const words = '@#*0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';
  // eslint-disable-next-line camelcase
  const max = words.length - 1;
  for (let i = 0; i < PASS_LENGHT; i += 1) {
    // eslint-disable-next-line camelcase
    const position = Math.floor(Math.random() * max);
    pw += words.substring(position, position + 1);
  }
  return pw;
}

function START_KEYBOARD(ctx) {
  ctx.reply('Сделайте выбор', {
    reply_markup: {
      kkeyboard: [
        ['Создать новый пароль +'],
        ['Список сохраненных паролей 📋'],
        [`Настройка длины пароля(${PASS_LENGHT}) ⚙️`],
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
      msg.reply('Список сохраненных паролей пуст', msg.message.chat.id);
    } else {
      msg.reply(
        `Список сохраненных паролей: ${PASSWORDS_LIST_LET}`,
        { parse_mode: 'HTML' },
        msg.message.chat.id
      );
    }
  });
}

function SAVE_PW() {
  bot.hears('Сохранить пароль 💾', (spw) => {
    COMM_REMEMBER();
    WAIT_TIME = Timer();
    tranfer = COMM_REMEMBER();
    if (REMEMBER_PW === '') {
      spw.reply('Для начала нужно создать пароль', spw.message.chat.id);
    } else {
      PASSWORDS_LIST_LET += `
      ${count}) <code>${REMEMBER_PW}</code> Комментарий: ${tranfer} (${WAIT_TIME})`;
      REMEMBER_PW = ``;
      spw.reply('Ваш пароль успешно сохранен', spw.message.chat.id);
      count += 1;
      tranfer = ' ';
    }
  });
}

function LENGTH_OF_PW() {
  bot.hears(`Настройка длины пароля(${PASS_LENGHT}) ⚙️`, (ctx) => {
    ctx.reply(`Настоящая длина пароля: ${PASS_LENGHT}`, ctx.message.chat.id);
    ctx.reply('Введите желаемую длину пароля(от 1 до 40)', ctx.message.chat.id);
    bot.hears(numbers, (msg) => {
      PASS_LENGHT = msg.message.text;
      msg.reply(`Длина пароля: ${PASS_LENGHT}`, msg.message.chat.id);
    });
  });
}

function CREATE_NEW_PASSWORD() {
  bot.hears('Создать новый пароль +', (ctx) => {
    ctx.reply('Выберите вид вашего пароля', {
      reply_markup: {
        kkeyboard: [
          ['Только буквы 🔤'],
          ['Буквы и цифры 🔤+🔟'],
          ['Буквы, цифры и другие знаки 🔤+🔟+#️⃣'],
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
    bot.hears('Только буквы 🔤', (geg) => {
      PASS_OUTPUT = RAND_ABC(geg);
      geg.reply(
        `<code>${PASS_OUTPUT}</code>
Введите коментарий к паролю и сохраните пароль`,
        { parse_mode: 'HTML' }
      );
      REMEMBER_PW = PASS_OUTPUT;
    });
    bot.hears('Буквы и цифры 🔤+🔟', (geg) => {
      PASS_OUTPUT = RAND_ABC_NUM();
      geg.reply(
        `<code>${PASS_OUTPUT}</code>
Введите коментарий к паролю и сохраните пароль`,
        { parse_mode: 'HTML' }
      );
      REMEMBER_PW = PASS_OUTPUT;
    });
    bot.hears('Буквы, цифры и другие знаки 🔤+🔟+#️⃣', (geg) => {
      PASS_OUTPUT = RAND_ABC_NUM_ELSE();
      geg.reply(
        `<code>${PASS_OUTPUT}</code>
Введите коментарий к паролю и сохраните пароль`,
        { parse_mode: 'HTML' }
      );
      REMEMBER_PW = PASS_OUTPUT;
    });
    SAVE_PW();
  });
}
// ===============================================================START=================================================================
bot.start((ctx) => {
  ctx.reply(`Привет, ${ctx.message.from.first_name}`, ctx.message.chat.id);
  START_KEYBOARD(ctx);
  CREATE_NEW_PASSWORD();
  LENGTH_OF_PW();
  bot.hears('Назад ↩️', () => {
    START_KEYBOARD(ctx);
    CREATE_NEW_PASSWORD();
    LENGTH_OF_PW();
  });
});

bot.help((ctx) => ctx.reply('Нет', ctx.message.chat.id));

// eslint-disable-next-line no-console
console.log('All systems are ok...');
bot.launch();
