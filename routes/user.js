const express = require("express");
const {
  register,
  login,
  forgetPassword,
  getAllUsers,
  getUserById,
} = require("../controllers/userController");

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/forget-password", forgetPassword);
router.get("/all", getAllUsers);
router.get("/:id", getUserById);

module.exports = router;
