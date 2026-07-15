const express = require("express");
const router = express.Router();
const {
  createUser,
  getUser,
  getUserById,
  updateUser,
  deleteUser,
} = require("../controller/userControllers");
const { validateUser, validateUser2 } = require("../midleware/userAuth");

router.post("/users", validateUser, createUser);
router.get("/users", getUser);
router.get("/users/:id", validateUser2, getUserById);
router.put("/users/:id", validateUser2, updateUser);
router.delete("/users/:id",deleteUser);

module.exports = router;
