const express = require('express');
const router = express.Router();
const { handlePostData, handleGetData } = require('../middlewares/routeHandlers');

router.post('/', handlePostData);
router.get('/', handleGetData);

module.exports = router;
