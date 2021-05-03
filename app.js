const { Telegraf } = require('telegraf')
const dotenv = require('dotenv')


dotenv.config()


const bot = new Telegraf(process.env.BOT_TOKEN)
bot.start((ctx) => {
  ctx.reply(`welcome ${ctx.message.chat.first_name}`);
  console.log(ctx.message)
  ctx.telegram.sendMessage(ctx.chat.id, "select your District", {
    reply_markup: {
      inline_keyboard: [
        [{text: "Alappuzha", callback_data: "301"},{text:"Ernakulam", callback_data: "307"},{text:"Idukki", callback_data: "306"}],
        [{text:"Kannur", callback_data: "297"},{text:"Kasaragod", callback_data: "295"},{text:"Kollam", callback_data: "298"}],
        [{text:"Kottayam", callback_data: "304"},{text: "Kozhikode", callback_data: "305"},{text:"Malappuram", callback_data: "302"}],
        [{text:"Palakkad", callback_data: "308"},{text:"Pathanamthitta", callback_data: "300"},{text:"Thiruvananthapuram", callback_data: "296"}],
        [{text: "Thrissur", callback_data: "303"},{text:"Wayanad", callback_data: "299"}]
    ]
    }
  })
})

// bot.on('text', (ctx) => {
  
// })


bot.launch()
