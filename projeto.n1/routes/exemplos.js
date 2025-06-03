
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('exemplos', { title: 'exemplos' });
});

module.exports = router;
