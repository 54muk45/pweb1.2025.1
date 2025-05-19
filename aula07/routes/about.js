var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/about', function(req, res, next) {
  res.send('about', { title: 'Express' });
});

module.exports = router;
