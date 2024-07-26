const { bot } = require('../bot')
const User = require('../../model/user')

const start = async (msg) => {
  const chatId = msg.from.id

  let checkUser = await User.findOne({ chatId }).lean()

  if (!checkUser) {
    const newUser = new User({
      name: msg.from.first_name,
      chatId,
      admin: false,
      status: true,
      createdAt: new Date(),
      action: 'request_contact',
    })
    await newUser.save()
    bot.sendMessage(
      chatId,
      `Assalomu aleykum, hurmatli ${msg.from.first_name}. Iltimos telefon raqamingizni yuboring`,
      {
        reply_markup: {
          keyboard: [
            [{ text: 'Telefon raqamni yuborish', request_contact: true }],
          ],
          resize_keyboard: true,
        },
      }
    )
  }
}

const requestContact = async (msg) => {
  const chatId = msg.from.id

  if (msg.contact && msg.contact.phone_number) {
    let user = await User.findOne({ chatId }).lean()
    user.phone = msg.contact.phone_number
    user.admin = msg.contact.phone_number == '+998337041920'
    user.action = 'menu'
    await User.findByIdAndUpdate(user._id, user, { new: true })
    bot.sendMessage(
      chatId,
      `Menuyuni tanlang, ${user.admin ? 'Admin' : user.name}`,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: 'Katalog',
              },
            ],
          ],
          resize_keyboard: true,
        },
      }
    )
  }
}

module.exports = {
  start,
  requestContact,
}
