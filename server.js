// server.js
require('dotenv').config(); // Load .env variables

const express = require("express");

const bodyParser = require("body-parser");
const bot = require("./bot"); // Telegram bot setup
const { sendNotificationMail } = require("./mailer");

const app = express();
const PORT = process.env.PORT || 3000;

console.log("Starting server...");

// Set view engine
app.set("view engine", "ejs");
app.set("views", __dirname); // index.ejs must be in the root folder

// Middleware
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

// Start the bot
bot.launch();

// Routes
app.get("/", async (req, res) => {
    res.render("index"); // Loads index.ejs
});

// Start the server
app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
});
