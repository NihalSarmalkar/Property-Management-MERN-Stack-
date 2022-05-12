const Comment = require('../models/commentData')

const postComment =async (req,res)=>{
    try{
        const newAdminAward= new Comment(req.body)
        const data = await newAdminAward.save();
        res.status(200).json(data)

    }catch(e){
        res.status(500).json(err)

    }
}


const getComment = async(req,res)=>{
    try{
        const data = await Comment.find()
        res.status(200).json(data)
    }catch(err){
        res.status(500).json(err)

    }
}

module.exports={
    postComment,
    getComment
}