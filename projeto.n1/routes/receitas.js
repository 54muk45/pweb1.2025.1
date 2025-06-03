
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('receitas', { title: 'receitas' });
});

module.exports = router;
