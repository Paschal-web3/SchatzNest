const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: String, unique: true,
  Fullname: String, required: true,
  Username: String, required: true,
  password: String, required: true,
  confpassword: String, required: true,
  upline: String, required: true
});

module.exports = mongoose.model('User', userSchema);
