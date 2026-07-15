const express = require("express");
const router = express.Router();

const {
  register,
  login,
  profile,
} = require("../controler/authController");

const verifyToken = require("../midleware/authMiddleware");

router.post("/register", register);
router.post("/login", login);
router.get("/profile", verifyToken, profile);

module.exports = router;