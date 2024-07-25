const {bot} = require('./bot')


bot.on('message', (msg) => {
    console.log(msg.text)
  })