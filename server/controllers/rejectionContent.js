const Rejectioncontent = require('../models/rejectionComments')

const rejectionContent =async (req,res)=>{
    try{
        const newAdminAward= new Rejectioncontent(req.body)
        const data = await newAdminAward.save();
        res.status(200).json(data)

    }catch(e){
        res.status(500).json(err)

    }
}


const getrejectionContent = async(req,res)=>{
    try{
        const data = await Rejectioncontent.find()
        res.status(200).json(data)
    }catch(err){
        res.status(500).json(err)

    }
}

module.exports={
    rejectionContent,
    getrejectionContent
}