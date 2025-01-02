const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  fullName: { type: String, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
  affiliateCode: { type: String, unique: true },
  affiliateLink: { type: String },
  upline: { type: String, default: null },
  referrals: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  affiliateCommission: { type: Number, default: 0 },
  investmentPlan: { type: Number, default: 0 },
  balance: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("User", userSchema);
