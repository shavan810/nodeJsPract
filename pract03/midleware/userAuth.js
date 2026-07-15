// middleware/validateUser.js
const users=require("../data/user");
const validateUser = (req, res, next) => {
  const { name, age } = req.body;

  if (!name || !age) {
    return res.status(400).json({
      message: "Name and age are required",
    });
  }

  if(typeof name !== "string"){
    return res.status(400).json({
        message:"name must be strings "
    })
  }
  next();
};

const validateUser2=(req,res,next)=>{

    const {id}=req.params;
    const exist = users.find((u)=>u.id === Number(id));
    if(!exist){
        return res.status(400).json({
            message:"user not presents "
        })
    }
    next();
}

module.exports = {validateUser,validateUser2};