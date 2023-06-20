const express = require('express');
const router = express.Router();
const matiereController = require('../controllers/matiereController');
const VerifyToken = require('../services/VerifyToken');

router.post('/' , matiereController.createMatiere);
router.get('/', VerifyToken , matiereController.findAllMatiere);
router.get('/:id', VerifyToken ,matiereController.findMatiere);
router.delete('/:id',VerifyToken,  matiereController.deleteMatiere);
router.put('/:id',VerifyToken,  matiereController.updateMatiere);
router.get('/etudiant/:idEtudiant',VerifyToken,  matiereController.findAllMatiere);
router.get('/prof/:id' ,VerifyToken, matiereController.getMatiereByProf);
module.exports = router 

