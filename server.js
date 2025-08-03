// server.js
require('dotenv').config(); // Load .env variables at the top

const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const connectDB = require("./sample/schema"); // your DB connection function
const Message = require("./sample/main/models/message"); // your message schema file
const bot = require("./bot"); // your Telegram bot setup
const {sendNotificationMail}=require("./mailer")
const app = express();
const PORT = process.env.PORT || 3000;

console.log("Starting server...");

// View engine (optional)
app.set("view engine", "ejs");
app.set("views", __dirname);

// Middleware
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
    bot.launch();

// Routes
app.get('/', async (req, res) => {
    res.render("index");
});
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});


// Route to receive bot data
// app.post("/store-message", async (req, res) => {
//   try {
//     const { text, timestamp } = req.body;
//     const message = new Message({ text, timestamp });
//     await message.save();
//     res.status(200).json({ success: true, message: "Stored successfully" });
//   } catch (err) {
//     console.error("❌ Error saving message:", err);
//     res.status(500).json({ success: false, error: err.message });
//   }
// });

// Connect DB and start server
// connectDB().then(() => {
//   app.listen(PORT, () => {
//     console.log(`🚀 Server started on http://localhost:${PORT}`);

//   });
// }).catch((err) => {
//   console.error("❌ Failed to connect DB:", err);
// });
