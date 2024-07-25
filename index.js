const express = require('express')
const app = express()
const mongoose = require('mongoose')
const TELEGRAM_BOT = require('node-telegram-bot-api')
app.use(express.json())

// model

const User = require('./models/user')

const PORT = 3000
const MONGO_URI =
  'mongodb+srv://coderdim:Cgr2xjwfwNuOpblm@texno.cauaiax.mongodb.net/?retryWrites=true&w=majority&appName=texno'
const TOKEN = '7326731390:AAGAPcJEJWMBlFUh1eJ62UTjwyFBvRn6wHY'

const bot = new TELEGRAM_BOT(TOKEN, { polling: true })

bot.on('message', async (msg) => {
  const chatId = msg.from.id
  const text = msg.text

  if (text === '/start') {
    const checkUser = await User.findOne({ chatId }).lean()
    if (!checkUser) {
      const newUser = new User({
        name: msg.from.username,
        chatId,
        createdAt: new Date(),
        action: 'start',
      })
      await newUser.save()
    }

    console.log('start bosdi')
  } else {
    bot.sendMessage(
      chatId,
      `Salom @${msg.from.username.toLowerCase()}, Texno-Magazin botiga xush kelibsiz`
    )
  }
})

async function dev() {
  try {
    await mongoose
      .connect(MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => console.log('MongoDB connected✔✔✔✔'))
      .catch((err) => console.log('MONGO ULANMADI✖✖✖', err))

    app.listen(PORT, () =>
      console.log(`SERVER ishga tusdi: ${`http://localhost:${PORT}`}`)
    )
  } catch (error) {
    console.log(error)
  }
}

dev()
