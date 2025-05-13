const express = require('express');
const router = express.Router();
const { showPage } = require('../middlewares/routeHandlers');

router.get('/', showPage('/'));
router.get('/about', showPage('/about'));

module.exports = router;
