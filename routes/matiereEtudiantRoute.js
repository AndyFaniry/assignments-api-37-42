const express = require('express');
const router = express.Router();
const matiereEtudiantController = require('../controllers/matiereEtudiantController');
const verifyToken = require('../services/verifyToken');

router.post('/' , matiereEtudiantController.createMatiereEtudiant);
router.get('/' , matiereEtudiantController.findAllMatiereByEtudiant);

module.exports = router