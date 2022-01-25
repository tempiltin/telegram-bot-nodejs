const TelegramBot = require('node-telegram-bot-api')

const TOKEN = '5167690788:AAGHpsBK2w6ii6m8_M5MMwCac5-YUFMSfzs'

const bot = new TelegramBot(TOKEN , {polling: true})

bot.on('message' , msg => {
    bot.sendMessage(msg.chat.id, 'Assalomu alaykum , bot says: "Hi , ${msg.from.first_name}"')
})
