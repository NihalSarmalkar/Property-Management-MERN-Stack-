const express = require('express');
require('dotenv').config();
const router = express.Router();
require('dotenv').config();

// Controllers
const propertyagentController = require('../controllers/propertyagent');
const financeconsultant = require('../controllers/financeConsultant')
const adminawards = require('../controllers/adminawards')
const authcontroller = require('../controllers/authcontroller')
const userManagement = require('../controllers/userManagement')
const Comment = require('../controllers/comment')
const rejectionContent = require('../controllers/rejectionContent')

router.use(express.json())

router.get('/test', (req, res) => {
  res.send('Working');
});

//s3 listvideos endpoint
// router.get('/listvideos/', aws_con.listVideos);


// Adding to cart i.e. checkout


//Routes for authentication
router.post('/register', authcontroller.registeruser)
router.post('/login', authcontroller.loginuser)
router.get('/gettalluser',authcontroller.getAllUsers)


//Routes for propertyagent
router.get('/getcase', propertyagentController.getCaseAll);
router.get('/getone/:id', propertyagentController.getCaseOne);
router.delete('/delone/:id', propertyagentController.delCaseOne);
router.put('/updateone/:id', propertyagentController.updateCaseOne);
router.post('/updatecase', propertyagentController.updateCase)
router.get('/updatecasefile/:id', propertyagentController.updatecasefile)
router.post('/addcasepropertyagent', propertyagentController.addCase);


//Routes for Finance Consultant
router.post('/addfinanceconsutant',financeconsultant.addfinanceconsutant)
router.get('/getallfinanceconsutant',financeconsultant.getall)
router.get('/getonefinanceconsutant/:id',financeconsultant.getone)
router.put('/putonefinanceconsutant/:id',financeconsultant.updateone)
router.post('/updatefinanceconsutant', financeconsultant.updatefinanceconsutant)


//Routes for admin awards
router.post('/addadminawards',adminawards.addadminawards)
router.get('/getadminawards',adminawards.getadminawards)
router.delete('/deladminawards/:id',adminawards.deladminawards)
router.put('/updateadminawards/:id',adminawards.updateadminawards)
router.post('/updateawards', adminawards.updateawards)


//rejectionComments
router.post('/rejectionContent',rejectionContent.rejectionContent)
router.get('/getrejectionContent',rejectionContent.getrejectionContent)


//Comments
router.post('/postComment',Comment.postComment)
router.get('/getComment',Comment.getComment)



//UserManagement
router.post('/adduser',userManagement.adduser)
router.get('/getusers',userManagement.getusers)
router.delete('/deluser/:id',userManagement.deluser)
router.put('/updateuser/:id',userManagement.updateuser)
router.post('/updateusers', userManagement.updateusers)
router.post('/authuser',userManagement.authuser)


// router.delete('/delallcheckouts/:uid', checkoutController.delallcheckouts);



module.exports = router;
