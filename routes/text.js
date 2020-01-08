var express = require('express');
var router = express.Router();

/* POST text. */
router.post('/', function(req, res, next) {  
  res.status(200).json({text:req.body.text});
});

module.exports = router;