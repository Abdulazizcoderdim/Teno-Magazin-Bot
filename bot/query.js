const { bot } = require('./bot')
const User = require('../model/user')
const { add_category, pagination_category } = require('./helper/category')

bot.on('callback_query', async (query) => {
  // console.log(query.data)
  const { data } = query
  const chatId = query.from.id

  console.log(data)
  if (data === 'add_category') {
    add_category(chatId)
  }

  if([ 'next_category','back_category'].includes(data)){
    pagination_category(chatId, data)
  }
})
