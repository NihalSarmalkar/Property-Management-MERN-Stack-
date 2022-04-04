const express = require('express');
require('dotenv').config();
const router = express.Router();
require('dotenv').config();

// Controllers
const propertyagentController = require('../controllers/propertyagent');

router.use(express.json())

router.get('/test', (req, res) => {
  res.send('Working');
});

//s3 listvideos endpoint
// router.get('/listvideos/', aws_con.listVideos);


// Adding to cart i.e. checkout

router.get('/getcase', propertyagentController.getCaseAll);
router.get('/getone/:id', propertyagentController.getCaseOne);
router.put('/updateone/:id', propertyagentController.updateCaseOne);
router.post('/updatecase', propertyagentController.updateCase)
router.get('/updatecasefile/:id', propertyagentController.updatecasefile)
router.post('/addcasepropertyagent', propertyagentController.addCase);
// router.delete('/delallcheckouts/:uid', checkoutController.delallcheckouts);



module.exports = router;
