var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/users', function(req, res, next) {
  res.send('users');
});

router.get('/users/:usersid', function(req, res, next) {
  res.send('users');
});

module.exports = router;
