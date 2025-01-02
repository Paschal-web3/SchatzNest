const mongoose = require("mongoose");

const investmentSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  amount: { type: Number, required: true },
  plan: { type: String, enum: ["monthly", "yearly"], required: true },
  roi: { type: Number, required: true },
  startDate: { type: Date, default: Date.now },
  endDate: { type: Date, required: true },
});

module.exports = mongoose.model("Investment", investmentSchema);
