const express = require('express');
const router = express.Router();
const matiereController = require('../controllers/matiereController');
const verifyToken = require('../services/verifyToken');

router.post('/' , matiereController.createMatiere);
router.get('/', verifyToken , matiereController.findAllMatiere);
router.get('/:id', matiereController.findMatiere);
router.delete('/:id', verifyToken , matiereController.deleteMatiere);
router.put('/:id', verifyToken , matiereController.updateMatiere);
router.get('/etudiant/:idEtudiant',  matiereController.findAllMatiere);

module.exports = router 

