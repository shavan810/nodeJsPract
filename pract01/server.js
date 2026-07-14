const express = require("express");
const app = express();

// routers
const userRoutes = require("./routes/userRoutes");

app.use(express.json());
const PORT = 5000;

app.use("/api",userRoutes);

app.listen(PORT, () => {
  console.log(`Port is runing on localhost:${PORT}`);
});
