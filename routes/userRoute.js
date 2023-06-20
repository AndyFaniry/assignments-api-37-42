const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const VerifyToken = require('../services/VerifyToken.js');

router.post('/login' , userController.login);
router.post('/' , userController.createUser);
router.get('/',VerifyToken, userController.findAllUser);
router.get('/:id', VerifyToken , userController.findUser);
router.delete('/:id', VerifyToken , userController.deleteUser);
router.put('/:id', VerifyToken , userController.updateUser);

module.exports = router 

