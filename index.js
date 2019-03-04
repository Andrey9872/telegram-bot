const TelegramBot = require('node-telegram-bot-api');

// replace the value below with the Telegram token you receive from @BotFather
const token = '621364028:AAEM-_An2boteW1rm1GNbqa7KDiHb6a5dmo';

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});

// Listen for any kind of message. There are different kinds of
// messages.
bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  if (msg.text == 'привет' || msg.text == 'Привет'){
    bot.sendMessage(chatId, 'И тебе привет 3');
  } else {
    bot.sendMessage(chatId, 'Сообщение получено!');
  };
  // send a message to the chat acknowledging receipt of their message

});
