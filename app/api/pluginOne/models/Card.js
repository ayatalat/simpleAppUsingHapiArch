const mongoose = require('mongoose');

module.exports = new mongoose.Schema({
  name:String,
  RecipientEmail:String,
  SenderName:String,
  SenderEmail:String
});