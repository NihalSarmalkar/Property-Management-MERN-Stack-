const AdminAward_Model = require('../models/adminawards')

const addadminawards =async (req,res)=>{
    try{
        const newAdminAward= new AdminAward_Model(req.body)
        const data = await newAdminAward.save();
        res.status(200).json(data)

    }catch(e){
        res.status(500).json(err)

    }
}


const getadminawards = async(req,res)=>{
    try{
        const data = await AdminAward_Model.find()
        res.status(200).json(data)
    }catch(err){
        res.status(500).json(err)

    }
}

const updateadminawards=async(req,res)=>{
    try{
        const data =await AdminAward_Model.findByIdAndUpdate(
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


const deladminawards = async (req,res)=>{
    try{
        console.log(req.params.id)
        await AdminAward_Model.findByIdAndDelete(req.params.id);
        res.status(200).json("Product has been deleted...");

    }
    catch(err){
        res.status(500).json(err)

    }

}
module.exports={
    addadminawards,
    getadminawards,
    updateadminawards,
    deladminawards
}

// getadminawards
// deladminawards
// updateadminawards