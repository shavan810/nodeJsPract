const express = require("express");
const router = express.Router();

const { register } = require("../controllers/userController");

router.post("/users", register);

module.exports = router;