const express = require('express');
const verifyToken = require('../services/verifyToken');
const router = express.Router();
const photoController = require('../controllers/photoController');

router.post('/', photoController.uploadFile);
router.get('/:name' , photoController.findPhotoByName);

module.exports = router