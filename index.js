const express = require('express')
const app = express()
const mongoose = require('mongoose')

app.use(express.json())

const PORT = 3000
const MONGO_URI =
  'mongodb+srv://coderdim:Cgr2xjwfwNuOpblm@texno.cauaiax.mongodb.net/?retryWrites=true&w=majority&appName=texno'
const TOKEN = '7326731390:AAGAPcJEJWMBlFUh1eJ62UTjwyFBvRn6wHY'


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
      console.log(`SERVER idhga tusdi: ${`http://localhost:${PORT}`}`)
    )
  } catch (error) {
    console.log(error)
  }
}

dev()
