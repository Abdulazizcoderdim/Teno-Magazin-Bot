const { bot } = require('./bot')
const {start} = require('./helper/start') 

bot.on('message', (msg) => {
  const chatId = msg.from.id
  const text = msg.text

  if (text === '/start') {
    start(msg)
  }
})
 