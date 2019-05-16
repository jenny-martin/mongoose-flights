var express = require('express');
var router = express.Router();
var flightsCtrl = require('../controllers/flights');

/* GET users listing. */
router.get('/', flightsCtrl.index); 
router.get('/', flightsCtrl.new); 
router.get('/', flightsCtrl.show); 
router.post('/', flightsCtrl.create); 


module.exports = router;
