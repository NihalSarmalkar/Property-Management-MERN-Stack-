
// Models
const Case_Model = require('../models/Case');

const addCase = async (req, res) => {
    res.setHeader("Content-Type", "application/json");
    const {
       usertype ,type, projecttype, subcategory, employementyear, name, contact, email
    } = req.body;

    var data = {
        usertype,
        type, 
        projecttype, 
        subcategory, 
        employementyear, 
        name, 
        contact, 
        email
    }

    try {
        Case_Model.countDocuments({ usertype, name, email, type, subcategory }).then((count) => {
            if (count === 0) {
              const newCase = new Case_Model(data);
              newCase
                .save()
                .then((data) => {
                    res.status(200).json("Added");
                })
                .catch((err) => console.log(err));
            } else {
                res.status(201).json("Already Added");
            }
        });
    } catch (err) {
        console.log(err);
    }
}

const getCaseAll = async (req, res) => {
    try {
        Case_Model.find({}).sort({ createdAt: -1 })
            .then((data) => {
                res.status(200).json(data);
            })
            .catch((err) => res.status(400).json(`Error: ${err}`));
    } catch (err) {
        console.log(err);
    }
}

module.exports = {
    addCase,
    getCaseAll
}