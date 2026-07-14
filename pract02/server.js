const express=require('express');
const app=express();
const PORT=5000;
const userRoutes=require("./routes/userRoutes")

app.use(express.json());
app.use("/api",userRoutes);


app.listen(PORT,()=>{
    console.log(`port is runing on localhost:${PORT}`)
})