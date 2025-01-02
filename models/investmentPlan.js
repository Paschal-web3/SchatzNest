const mongoose = require('mongoose');

const investmentPlanSchema = new mongoose.Schema({
  planName: String,
  minAmount: Number, default: 100,
  maxAmount: Number,
  returnRate: Number,
  duration: Number,
  description: String,
});

module.exports = mongoose.model('InvestmentPlan', investmentPlanSchema);
