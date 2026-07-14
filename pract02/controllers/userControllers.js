const users = [
  { id: 1, name: "shavan singh", age: 25 },
  { id: 2, name: "raj singh", age: 24 },
];

const update = async (req, res) => {
  try {
    const { id } = req.params;
    const exist = users.find((u) => u.id === Number(id));

    if (!exist) {
      return res.status(404).json({
        message: "user not exist ...!",
      });
    }

    const { name, age } = req.body;
    exist.name = name;
    exist.age = age;

    return res.status(200).json({
      message: "updated successfully....!",
      user: exist,
    });
  } catch (err) {
    return res.status(500).json({
      message: "Internal Server Errors...!",
    });
  }
};

module.exports = {
  update,
};
