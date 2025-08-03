const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema({
  text: String,
  timestamp: Date,
});

module.exports = mongoose.model("Message", MessageSchema);
