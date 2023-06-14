const express = require('express');
const verifyToken = require('../services/verifyToken');
const router = express.Router();
const photoController = require('../controllers/photoController');

router.post('/' , verifyToken , photoController.uploadFile);
router.get('/:name' , verifyToken , photoController.findPhotoByName);

module.exports = router