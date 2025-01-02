exports.calculateROI = (amount, plan) => {
    const rate = plan === "monthly" ? 0.03 : 0.36; // 3% monthly or 36% yearly
    return amount * rate;
  };
  