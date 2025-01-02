const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require ('../models/user');
const { generateAffiliateLink } = require("../utils/generateAffiliateLink");

// Register User
exports.register = async (req, res) => {
  const { email, fullName, username, password, confPassword, upline } = req.body;

  if (!email || !fullName || !username || !password || !confPassword) {
    return res.status(400).json({ message: "All fields are required" });
  }

  if (password !== confPassword) {
    return res.status(400).json({ message: "Passwords do not match" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const { code, link } = generateAffiliateLink();

  const newUser = new User({
    email,
    fullName,
    username,
    password: hashedPassword,
    affiliateCode: code,
    affiliateLink: link,
    upline,
  });

  try {
    const savedUser = await newUser.save();
    res.status(201).json({ message: "User registered successfully", user: savedUser });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Login User
exports.login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });

    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) return res.status(401).json({ message: "Invalid credentials" });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1d" });
    res.status(200).json({ message: "Login successful", token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Forget Password
exports.forgetPassword = async (req, res) => {
  const { email, newPassword } = req.body;

  if (!email || !newPassword) {
    return res.status(400).json({ message: "Email and new password are required" });
  }

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });

    const hashedPassword = await bcrypt.hash(newPassword, 10);
    user.password = hashedPassword;
    await user.save();

    res.status(200).json({ message: "Password reset successful" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get All Users
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select("-password");
    res.status(200).json({ message: "Users retrieved successfully", users });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get User by ID
exports.getUserById = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.findById(id).select("-password");
    if (!user) return res.status(404).json({ message: "User not found" });

    res.status(200).json({ message: "User retrieved successfully", user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
