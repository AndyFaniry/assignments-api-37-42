const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const verifyToken = require('../services/VerifyToken');

router.post('/login' , userController.login);
router.post('/' , userController.createUser);
router.get('/', verifyToken , userController.findAllUser);
router.get('/:id', verifyToken , userController.findUser);
router.delete('/:id', verifyToken , userController.deleteUser);
router.put('/:id', verifyToken , userController.updateUser);

module.exports = router 

