const express = require("express");
const router = express.Router();

const validateUser = require("../midleware/validateUser");
const {update} = require("../controllers/userControllers");


router.put("/user-update/:id", validateUser, update);

module.exports = router;
