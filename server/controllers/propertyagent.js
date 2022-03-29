
// Models
const Case_Model = require('../models/Case');

const addCase = async (req, res) => {
   // res.setHeader("Content-Type", "application/json");

   const {
      usertype, type, projecttype, subcategory, employementyear, name, contact, email, urls
   } = req.body;

   var data = {
      usertype,
      type,
      projecttype,
      subcategory,
      employementyear,
      name,
      contact,
      email,
      urls
   }

   try {
      Case_Model.countDocuments({ usertype, name, email, type, subcategory }).then((count) => {
         if (count === 0) {
            const newCase = new Case_Model(data);
            newCase
               .save()
               .then((data) => {
                  Case_Model.find({}).sort({ createdAt: -1 })
                     .then((cases) => {
                        res.status(200).json(cases);
                     })
                     .catch((err) => res.status(200).json(`Error: ${err}`));
               })
               .catch((err) => { });
         } else {
            res.status(201).json("Already Added");
         }
      });
   } catch (err) {
      // console.log(err);
   }
}

const getCaseAll = async (req, res) => {
   try {
      Case_Model.find({}).sort({ createdAt: -1 })
         .then((data) => {
            res.status(200).json(data);
         })
         .catch((err) => res.status(200).json(`Error: ${err}`));
   } catch (err) {
      // console.log(err);
   }
}

const updateCase = async (req, res) => {
   // return res.json(req.body);
   try {
      Case_Model.findByIdAndUpdate(req.body.case._id, req.body.updateable, { upsert: true }, function (err, doc) {
         if (err) return res.status(500).json({ err });
         else return res.status(200).json({ updated: true });
      });
   } catch (e) {
      console.log(e);
   }
}

module.exports = {
   addCase,
   getCaseAll,
   updateCase,
}