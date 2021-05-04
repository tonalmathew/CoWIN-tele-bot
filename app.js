const { Telegraf } = require("telegraf");
const dotenv = require("dotenv");
const axios = require("axios");

dotenv.config();

const bot = new Telegraf(process.env.BOT_TOKEN);
bot.start((ctx) => {
  ctx.reply(`welcome ${ctx.message.chat.first_name} enter your PIN code`);
  // console.log(ctx.message)
  // ctx.telegram.sendMessage(ctx.chat.id, "select your District", {
  //   reply_markup: {
  //     inline_keyboard: [
  //       [{text: "Alappuzha", callback_data: "301"},{text:"Ernakulam", callback_data: "307"},{text:"Idukki", callback_data: "306"}],
  //       [{text:"Kannur", callback_data: "297"},{text:"Kasaragod", callback_data: "295"},{text:"Kollam", callback_data: "298"}],
  //       [{text:"Kottayam", callback_data: "304"},{text: "Kozhikode", callback_data: "305"},{text:"Malappuram", callback_data: "302"}],
  //       [{text:"Palakkad", callback_data: "308"},{text:"Pathanamthitta", callback_data: "300"},{text:"Thiruvananthapuram", callback_data: "296"}],
  //       [{text: "Thrissur", callback_data: "303"},{text:"Wayanad", callback_data: "299"}]
  //   ]
  //   }
  // })
});

bot.on("text", (ctx) => {
  // console.log(ctx.message.text)
  pin = ctx.message.text;

  function getDetails(pin) {
    // console.log(this.pin)
    url = `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin?pincode=${this.pin}&date=04-05-2021`;
    axios
      .get(url)
      .then((res) => {
        sessionData = res.data.centers;
        // console.log(sessionData.length)
        if (sessionData.length != 0) {
          sessionData.forEach((element) => {
            ctx.reply(
              `State: ${element.state_name} \nDistrict: ${element.district_name} \nname: ${element.name} \nAvailable Sessions: ${element.sessions[0].available_capacity}`
            );
          });
        } else {
          ctx.reply("No Vaccination center is available for booking.");
        }

        // console.log(sessionData)
      })
      .catch(function (error) {
        // handle error
        // console.log(error.response.data.error);
        ctx.reply(error.response.data.error);
      });
  }

  getDetails();
});

bot.launch();
