// const { all } = require("../routes/userRoutes");

const users = require("../data/user");

const createUser = async (req, res) => {
  try {
    const { name, age } = req.body;
    const newUser = {
      id: users.length + 1,
      name,
      age,
    };

    users.push(newUser);
    return res.status(201).json({
      message: "user created successfully",
      users: newUser,
    });
  } catch (err) {
    return res.status(500).json({
      message: "internal server error",
    });
  }
};

const getUser = async (req, res) => {
  try {
    const allUsers = users;
    return res.status(200).json({
      users: allUsers,
    });
  } catch (err) {
    return res.status(500).json({
      message: "internal server error",
    });
  }
};

const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const exist = users.find((u) => u.id === Number(id));

    return res.status(200).json({
      users: exist,
    });
  } catch (err) {
    return res.status(500).json({
      message: "internal server error",
    });
  }
};

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const exist = users.find((u) => u.id === Number(id));
    const { name, age } = req.body;

    exist.name = name;
    exist.age = age;
    return res.status(200).json({
      users: exist,
    });
  } catch (err) {
    return res.status(500).json({
      message: "internal server error",
    });
  }
};

//delete operation ffrom crud 
const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const exist = users.find((u) => u.id === Number(id));
    users.splice(exist, 1);

    return res.status(200).json({
    message:"user deleted successfully",
      users: exist,
    });
  } catch (err) {
    return res.status(500).json({
      message: "internal server error",
    });
  }
};

module.exports = {
  createUser,
  getUser,
  getUserById,
  updateUser,
  deleteUser,
};
