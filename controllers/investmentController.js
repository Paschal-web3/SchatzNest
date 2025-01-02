const Investment = require("../models/Investment");
const { calculateROI } = require("../utils/calculateROI");

exports.createInvestment = async (req, res) => {
  const { amount, plan } = req.body;

  if (!amount || !plan) {
    return res.status(400).json({ message: "Amount and plan are required" });
  }

  const roi = calculateROI(amount, plan);

  const endDate = plan === "monthly" 
    ? new Date(Date.now() + 30 * 24 * 60 * 60 * 1000) 
    : new Date(Date.now() + 365 * 24 * 60 * 60 * 1000);

  const investment = new Investment({
    userId: req.user.id,
    amount,
    plan,
    roi,
    endDate,
  });

  try {
    const savedInvestment = await investment.save();
    res.status(201).json({ message: "Investment created successfully", investment: savedInvestment });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
