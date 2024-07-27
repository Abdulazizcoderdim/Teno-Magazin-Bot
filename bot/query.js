const { bot } = require('./bot')
const User = require('../model/user')

bot.on('callback_query', async (query) => {
  console.log(query.data)
  const {data} = query
  const chatId = query.from.id
})
