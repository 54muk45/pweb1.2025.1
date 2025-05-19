var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/data', function(req, res, next) {
  res.send('data', { title: 'Express' });
});

module.exports = router;
