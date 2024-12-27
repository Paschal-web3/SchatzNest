const mongoose = require('mongoose');

const investmentPlanSchema = new mongoose.Schema({
  name: String,
  minAmount: Number, default: 100,
  maxAmount: Number,
  returnRate: Number,
  duration: String,
  description: String,
});

module.exports = mongoose.model('InvestmentPlan', investmentPlanSchema);
