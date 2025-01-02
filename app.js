const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/database");

const userRoutes = require("./routes/userRoutes");
const affiliateRoutes = require("./routes/affiliateRoutes");
const investmentRoutes = require("./routes/investmentRoutes");

dotenv.config();
connectDB();

const app = express();

app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/affiliate", affiliateRoutes);
app.use("/api/investments", investmentRoutes);

module.exports = app;