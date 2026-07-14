const validateUser = (req, res, next) => {
    const { name, age } = req.body;

    if (!name || !age) {
        return res.status(400).json({
            success: false,
            message: "All fields are required"
        });
    }

    if (typeof name !== "string") {
        return res.status(400).json({
            success: false,
            message: "Name must be a string"
        });
    }

    if (typeof age !== "number") {
        return res.status(400).json({
            success: false,
            message: "Age must be a number"
        });
    }

    next(); // Validation pass ho gayi
};

module.exports = validateUser;