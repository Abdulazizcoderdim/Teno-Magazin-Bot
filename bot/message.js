const { bot } = require('./bot')
const { start, requestContact } = require('./helper/start')
const User = require('../model/user')

bot.on('message', async (msg) => {
  const chatId = msg.from.id
  const text = msg.text
  const user = await User.findOne({ chatId }).lean()

  if (text === '/start') {
    start(msg)
  }

  if (user) {
    if (user.action === 'request_contact') {
      requestContact(msg)
    }
  }
})
