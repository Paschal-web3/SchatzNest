const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: String, unique: true,
  Firstname: String, required: true,
  Lastname: String, required: true,
  Username: String, required: true,
  password: String, required: true,
  BNBAddress: String,
  BTCAddress: String,
  ETHAddress: String,
});

module.exports = mongoose.model('User', userSchema);
