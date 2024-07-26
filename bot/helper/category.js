const { bot } = require('../bot')
const User = require('../../model/user')
const Category = require('../../model/category')
const { adminKeyboard, userKeyboard } = require('../menu/keyboard')

const get_all_categories = async (msg) => {
  const chatId = msg.from.id
  const user = await User.findOne({ chatId }).lean()
  const categories = await Category.find().lean()

  console.log(categories)

  bot.sendMessage(chatId, "Katalog ro'yhati", {
    reply_markup: {
      remove_keyboard: true,
      inline_keyboard: [
        [
          {
            text: 'Ortga',
            callback_data: 'back_category',
          },
          {
            text: 1,
            callback_data: '0',
          },
          {
            text: 'Keyingisi',
            callback_data: 'next_category',
          },
        ],
        [
          {
            text: 'Yangi kategoriya',
            callback_data: 'add_category',
          },
        ],
      ],
    },
  })
}

module.exports = {
  get_all_categories,
}
