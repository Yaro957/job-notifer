const { Telegraf } = require("telegraf");
const dotenv = require("dotenv");
const axios = require("axios");
const {sendNotificationMail}=require('./mailer')
dotenv.config();

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((ctx) => ctx.reply("Welcome to the Job Notifier Bot!"));

// Forward only text and timestamp to server
bot.on("text", async (ctx) => {
  const chatType = ctx.chat.type;

  if (chatType === "group" || chatType === "supergroup") {
    const text = ctx.message.text || "[non-text message]";
    const timestamp = new Date(ctx.message.date * 1000);

    try {
      sendNotificationMail("new entry",text)
    } catch (err) {
      console.error("Error sending to users:", err.message);
    }
  }
});

module.exports = bot;
