const register = async (req, res) => {
  try {
    const { name, age } = await req.body;
    if (!name || !age) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }
    res.status(201).json({
      success: true,
      message: "User created successfully",
      user: {
        name,
        age,
      },
    });
  } catch (err) {
    console.log(`error in register...`);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

module.exports={
    register,
};