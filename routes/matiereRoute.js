const express = require('express');
const router = express.Router();
const matiereController = require('../controllers/matiereController');
const verifyToken = require('../services/verifyToken');

router.post('/' , verifyToken, matiereController.createMatiere);
router.get('/', verifyToken , matiereController.findAllMatiere);
router.get('/:id', verifyToken ,matiereController.findMatiere);
router.delete('/:id',  matiereController.deleteMatiere);
router.put('/:id',  matiereController.updateMatiere);
router.get('/etudiant/:idEtudiant',  matiereController.findAllMatiere);

module.exports = router 

