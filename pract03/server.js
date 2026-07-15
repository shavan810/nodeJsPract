const express=require("express");
const app=express();
const PORT=5000;
const router=require("./routes/userRoutes")

app.use(express.json());
app.use("/api",router);

app.listen(PORT,()=>{
    console.log(`server is runing on localhost:${PORT}`)
})