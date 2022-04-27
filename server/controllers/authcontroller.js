
const Usersdata = require('../models/usersdata')
const userManagementModel = require('../models/userManagementData')
const bcrypt = require("bcrypt");



const registeruser = async(req,res)=>{
    


  try {
    //generate new password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    //create new user
    const newUser = new Usersdata({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });

    //save user and respond
    const user = await newUser.save();
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err)
  }

}


const loginuser =async(req,res)=>{

  try {

    const user = await userManagementModel.findOne({ email: req.body.email });
    if(user){
      if(req.body.password===user.password){
        console.log("special case")
        res.status(200).json(user)


      }else{
        res.status(400).json("wrong password")

      }
    }
    else{
      console.log("noraml case")
      const user1 = await Usersdata.findOne({ email: req.body.email });
      !user1 && res.status(404).json("user not found");

      const validPassword = await bcrypt.compare(req.body.password, user1.password)
      !validPassword && res.status(400).json("wrong password")

      res.status(200).json(user1)

    }



    
  } catch (err) {
    res.status(500).json(err)
  }


}
const getAllUsers = async(req,res)=>{
  try{

    const data = await Usersdata.find()
    res.status(200).json(data)

  }catch(err){
    res.status(500).json(err)

  }
  
}

module.exports = {
    loginuser,
    registeruser,
    getAllUsers

}