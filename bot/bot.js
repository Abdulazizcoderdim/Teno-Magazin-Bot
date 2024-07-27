const TELEGRAM_BOT = require('node-telegram-bot-api')

const bot = new TELEGRAM_BOT(process.env.TOKEN, { polling: true })

bot.on('polling_error', (error) => {
  console.error('Polling xatosi:', error)
})

module.exports = {
  bot,
}

require('./message')
require('./query')
