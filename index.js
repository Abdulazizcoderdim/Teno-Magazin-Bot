const express = require('express')
const app = express()
const mongoose = require('mongoose')
const TELEGRAM_BOT = require('node-telegram-bot-api')

app.use(express.json())

const PORT = 3000
const MONGO_URI =
  'mongodb+srv://coderdim:Cgr2xjwfwNuOpblm@texno.cauaiax.mongodb.net/?retryWrites=true&w=majority&appName=texno'
const TOKEN = '7326731390:AAGAPcJEJWMBlFUh1eJ62UTjwyFBvRn6wHY'

const bot = new TELEGRAM_BOT(TOKEN, { polling: true })

bot.on('message', (msg) => {
  console.log(msg)
})

// {
//   message_id: 3,
//   from: {
//     id: 2022679351,
//     is_bot: false,
//     first_name: 'Abdulaziz',
//     username: 'abdulaziz704',
//     language_code: 'en'
//   },
//   chat: {
//     id: 2022679351,
//     first_name: 'Abdulaziz',
//     username: 'abdulaziz704',
//     type: 'private'
//   },
//   date: 1721895930,
//   text: '/start',
//   entities: [ { offset: 0, length: 6, type: 'bot_command' } ]
// }

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
