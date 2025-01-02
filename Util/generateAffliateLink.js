const { nanoid } = require("nanoid");

exports.generateAffiliateLink = () => {
  const code = nanoid(8); // Generate a unique 8-character code
  return { code, link: `${process.env.BASE_URL}/signup?ref=${code}` };
};
