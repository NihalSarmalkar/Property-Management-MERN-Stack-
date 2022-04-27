const userManagementModel = require('../models/userManagementData')

const adduser =async (req,res)=>{
    try{
        const newAdminAward= new userManagementModel(req.body)
        const data = await newAdminAward.save();
        res.status(200).json(data)

    }catch(e){
        res.status(500).json(err)

    }
}


const getusers = async(req,res)=>{
    try{
        const data = await userManagementModel.find()
        res.status(200).json(data)
    }catch(err){
        res.status(500).json(err)

    }
}

const updateuser=async(req,res)=>{
    try{
        const data =await userManagementModel.findByIdAndUpdate(
            req.params.id,
            {
                $set:req.body,
            },
            {new:true}
        );
        res.status(200).json(data)

    }
    catch(err){
        res.status(500).json(err)

    }
}


const deluser = async (req,res)=>{
    try{
        console.log(req.params.id)
        await userManagementModel.findByIdAndDelete(req.params.id);
        res.status(200).json("Product has been deleted...");

    }
    catch(err){
        res.status(500).json(err)

    }

}

const updateusers = async (req, res) => {
    // return res.json(req.body);
    try {
        userManagementModel.findByIdAndUpdate(req.body.case._id, req.body.updateable, { upsert: true }, function (err, doc) {
          if (err) return res.status(500).json({ err });
          else return res.status(200).json({ updated: true });
       });
    } catch (e) {
       console.log(e);
    }
}

const authuser =async(req,res)=>{

    try {
      const user = await userManagementModel.findOne({ email: req.body.email });
      !user && res.status(404).json("user not found");

      if(req.body.password===user.password){
        res.status(200).json(user)

      }else{
        res.status(400).json("wrong password")

      }
  
    //   const validPassword = await bcrypt.compare(req.body.password, user.password)
    //   !validPassword && res.status(400).json("wrong password")
  
    //   res.status(200).json(user)
    } catch (err) {
      res.status(500).json(err)
    }
  
  
  }



module.exports={
    adduser,
    getusers,
    deluser,
    updateuser,
    updateusers,
    authuser
}

// getadminawards
// deladminawards
// updateadminawards