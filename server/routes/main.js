const express = require('express');
require('dotenv').config();
const router = express.Router();
require('dotenv').config();

// Controllers
const propertyagentController = require('../controllers/propertyagent');



router.get('/test', (req, res) => {
  res.send('Working');
});

//s3 listvideos endpoint
// router.get('/listvideos/', aws_con.listVideos);


// Adding to cart i.e. checkout
router.post('/addcasepropertyagent', propertyagentController.addCase);
router.get('/getcase', propertyagentController.getCaseAll);
// router.delete('/delallcheckouts/:uid', checkoutController.delallcheckouts);



module.exports = router;
