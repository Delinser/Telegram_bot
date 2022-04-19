/* eslint-disable no-console */
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
let check = false;
let comment = ' ';
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
  let Hour = Number(Data.getHours());
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
  Hour += 10;
  if (Minutes.length === 1) Minutes = `0${Minutes}`;
  const Time = `${Day}.${Month}.${Year} ${Hour}:${Minutes}`;
  console.log(Hour);
  return Time;
}

function MESSAGE_DETECT() {
  console.log('1');
  detect = true;
  console.log('1-1');
  return detect;
}

function COMM_REMEMBER() {
  console.log('2');
  MESSAGE_DETECT();
  console.log('3');
  bot.hears(MESSAGE_DETECT, (msg) => {
    console.log('4');
    comm = msg.message.text;
    console.log('5');
    // eslint-disable-next-line no-console
    console.log(`${msg.message.text} gggggg`);
    console.log('6');
  });
  // eslint-disable-next-line no-console
  console.log('7');
  console.log(`${comm} comm`);
  console.log('8');
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
  const words = '_|!/&@#*0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';
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
  console.log('9');
  ctx.reply(
    'Сделайте выбор',
    {
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
    },
    ctx.message.chat.id
  );
  console.log('10');
  bot.hears('Список сохраненных паролей 📋', (msg) => {
    console.log('11');
    if (!PASSWORDS_LIST_LET) {
      console.log('12');
      msg.reply('Список сохраненных паролей пуст', msg.message.chat.id);
      console.log('13');
    } else {
      console.log('14');
      msg.reply(
        `Список сохраненных паролей: ${PASSWORDS_LIST_LET}`,
        { parse_mode: 'HTML' },
        msg.message.chat.id
      );
      console.log('15');
    }
    console.log('16');
  });
  console.log('17');
}

function SAVE_PW() {
  console.log('18');
  bot.hears('Сохранить пароль 💾', (spw) => {
    check += 1;
    console.log('19');
    COMM_REMEMBER();
    console.log('20');
    WAIT_TIME = Timer();
    console.log('21');
    tranfer = COMM_REMEMBER();
    console.log('22');
    console.log(`${tranfer}  transfer`);
    console.log('23');
    if (REMEMBER_PW === '') {
      console.log('24');
      spw.reply('Для начала нужно создать пароль', spw.message.chat.id);
      console.log('25');
    } else {
      console.log('26');
      PASSWORDS_LIST_LET += `
      ${count}) <code>${REMEMBER_PW}</code>${comment}${tranfer} (${WAIT_TIME})`;
      REMEMBER_PW = ``;
      console.log('27');
      spw.reply('Ваш пароль успешно сохранен', spw.message.chat.id);
      console.log('28');
      count = true;
      console.log('29');
      tranfer = 'Здесь мог быть ваш комментарий';
      comment = ' Комментарий: ';
      console.log('30');
    }
    console.log('31');
  });
  console.log('32');
}

function LENGTH_OF_PW() {
  bot.hears(`Настройка длины пароля(${PASS_LENGHT}) ⚙️`, (ctx) => {
    ctx.reply(`Настоящая длина пароля: ${PASS_LENGHT}`, ctx.message.chat.id);
    ctx.reply('Введите желаемую длину пароля(от 1 до 40)', ctx.message.chat.id);
    bot.hears(numbers, (heh) => {
      PASS_LENGHT = heh.message.text;
      heh.reply(`Длина пароля: ${PASS_LENGHT}`, heh.message.chat.id);
    });
  });
}

function CREATE_NEW_PASSWORD() {
  console.log('33');
  bot.hears('Создать новый пароль +', (ctx) => {
    ctx.reply(
      'Выберите вид вашего пароля',
      {
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
      },
      ctx.message.chat.id
    );
    console.log('34');
    bot.hears('Только буквы 🔤', (geg) => {
      console.log('35');
      PASS_OUTPUT = RAND_ABC(geg);
      console.log('36');
      if (check === false) {
        geg.reply(
          `Ваш пароль: <code>${PASS_OUTPUT}</code>
На данном этапе вы можете сохранить пароль`,
          { parse_mode: 'HTML' },
          geg.message.chat.id
        );
      } else {
        geg.reply(
          `Ваш пароль: <code>${PASS_OUTPUT}</code>
Введите коментарий к паролю и сохраните пароль`,
          { parse_mode: 'HTML' },
          geg.message.chat.id
        );
      }
      console.log('37');
      REMEMBER_PW = PASS_OUTPUT;
      console.log('38');
      SAVE_PW();
    });
    console.log('39');
    bot.hears('Буквы и цифры 🔤+🔟', (geg) => {
      console.log('40');
      PASS_OUTPUT = RAND_ABC_NUM();
      console.log('41');
      if (check === false) {
        geg.reply(
          `Ваш пароль: <code>${PASS_OUTPUT}</code>
На данном этапе вы можете сохранить пароль`,
          { parse_mode: 'HTML' },
          geg.message.chat.id
        );
      } else {
        geg.reply(
          `Ваш пароль: <code>${PASS_OUTPUT}</code>
Введите коментарий к паролю и сохраните пароль`,
          { parse_mode: 'HTML' },
          geg.message.chat.id
        );
      }
      console.log('42');
      REMEMBER_PW = PASS_OUTPUT;
      console.log('43');
      SAVE_PW();
    });
    console.log('44');
    bot.hears('Буквы, цифры и другие знаки 🔤+🔟+#️⃣', (geg) => {
      console.log('45');
      PASS_OUTPUT = RAND_ABC_NUM_ELSE();
      console.log('46');
      if (check === false) {
        geg.reply(
          `Ваш пароль: <code>${PASS_OUTPUT}</code>
На данном этапе вы можете сохранить пароль`,
          { parse_mode: 'HTML' },
          geg.message.chat.id
        );
      } else {
        geg.reply(
          `Ваш пароль: <code>${PASS_OUTPUT}</code>
Введите коментарий к паролю и сохраните пароль`,
          { parse_mode: 'HTML' },
          geg.message.chat.id
        );
      }
      console.log('47');
      REMEMBER_PW = PASS_OUTPUT;
      console.log('48');
      SAVE_PW();
    });
    console.log('49');
    // SAVE_PW();
    console.log('50');
  });
}
// ===============================================================START=================================================================
bot.start((ctx) => {
  console.log('51');
  ctx.reply(`Привет, ${ctx.message.from.first_name}`, ctx.message.chat.id);
  console.log('52');
  START_KEYBOARD(ctx);
  console.log('53');
  CREATE_NEW_PASSWORD();
  console.log('54');
  LENGTH_OF_PW();
  console.log('55');
  bot.hears('Назад ↩️', () => {
    console.log('56');
    START_KEYBOARD(ctx);
    console.log('57');
    CREATE_NEW_PASSWORD();
    console.log('58');
    LENGTH_OF_PW();
    console.log('59');
  });
  console.log('60');
});
console.log('61');
bot.help((ctx) => ctx.reply('Нет', ctx.message.chat.id));

// eslint-disable-next-line no-console
console.log('All systems are ok...');
bot.launch();
