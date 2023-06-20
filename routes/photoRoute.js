const express = require('express');
const VerifyToken = require('../services/VerifyToken');
const router = express.Router();
const photoController = require('../controllers/photoController');

router.post('/', photoController.uploadFile);
router.get('/:name' , photoController.findPhotoByName);

module.exports = router