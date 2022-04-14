const financeConsultant_Model = require('../models/financeConsultant')
const objectstocsv = require('objects-to-csv')

const addfinanceconsutant = async (req, res)=>{
    const newfinanceConsultant_Model=new financeConsultant_Model(req.body);
    try{
        const savedata= await newfinanceConsultant_Model.save();
        res.status(200).json(savedata);

    }
    catch(err){
        res.status(500).json(err);

    }

}
const updatefinanceconsutant = async (req, res) => {
    // return res.json(req.body);
    try {
        financeConsultant_Model.findByIdAndUpdate(req.body.case._id, req.body.updateable, { upsert: true }, function (err, doc) {
          if (err) return res.status(500).json({ err });
          else return res.status(200).json({ updated: true });
       });
    } catch (e) {
       console.log(e);
    }
 }
 

const getall = async (req, res)=>{
    try{
        const savedata = await financeConsultant_Model.find()
        if(req.query.start && req.query.end )
        {
            console.log(req.query.start)
            console.log(req.query.end)
            console.log(typeof(Date.parse(req.query.start)))
            console.log(typeof(Date.parse(req.query.end)))
            

        }   
        if(req.query.month){
            const month = req.query.month;
            
            const montharray =["demo","January","February","March","April","May","June","July","August","September","October","November","December"]
            let index = montharray.indexOf(month);
            console.log(index)
            console.log("----")
            const selecteddata=[]

            for (i in savedata){
                
                if((savedata[i].createdAt.getMonth()+1)=== montharray.indexOf(month))
                {
                    console.log(savedata[i].createdAt.getMonth())
                    selecteddata.push(savedata[i])
                }
                

            }
            res.status(200).json(selecteddata)
            
        }
        
       
        
        
        
        res.status(200).json(savedata)
    }
    catch(err){
        res.status(500).json(err)
    }

}

const getcsv = async (req, res)=>{
    try{
        const savedata = await financeConsultant_Model.find()
        const csv = new objectstocsv(savedata);
        await csv.toDisk('./test.csv');

        
        
        res.download("../text.csv")
        
    }
    catch(err){
        res.status(500).json(err)
    }

}

const getone = async (req, res)=>{
    try{
        console.log(req.params.id)
        const savedata = await financeConsultant_Model.findById(req.params.id)
        res.status(200).json(savedata)
    }
    catch(err){
        res.status(500).json(err)
    }

}

const updateone = async (req, res)=>{
    try{
        console.log(req.params.id)
        const savedata = await financeConsultant_Model.findByIdAndUpdate(
            req.params.id,
            {
                $set:req.body,

            },
            {new:true}
        );
        res.status(200).json(savedata)
    }
    catch(err){
        res.status(500).json(err)
    }

}



module.exports={
    addfinanceconsutant,
    getall,
    getone,
    updateone,
    updatefinanceconsutant,
    getcsv
}