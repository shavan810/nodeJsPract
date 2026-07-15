const express = require("express");
const app = express();
require("dotenv").config();
const authRoutes = require("./routes/authRoutes");

app.use(express.json());
app.use("/api", authRoutes);

console.log(process.env.PORT);
app.listen(process.env.PORT, () => {
  console.log(`server is runing on localhost:${process.env.PORT}`);
});
