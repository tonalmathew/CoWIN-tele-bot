const TG = require("telegram-bot-api");
const dotenv = require("dotenv");


dotenv.config();

const bot = new TG({
    token: process.env.BOT_TOKEN,
});

const mp = new TG.GetUpdateMessageProvider();

bot.setMessageProvider(mp);

bot
    .start()
    .then(() => {
        console.log("API is started");
    })
    .catch(console.err);
