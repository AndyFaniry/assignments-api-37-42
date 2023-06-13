const express = require('express');
const router = express.Router();
const assignmentController = require('../controllers/assignmentController');
const verifyToken = require('../services/VerifyToken');

  router.get('/', verifyToken, assignmentController.getAssignments);
  router.post('/', verifyToken, assignmentController.postAssignment);
  router.put('/', verifyToken, assignmentController.updateAssignment);
  router.get('/:id', verifyToken, assignmentController.getAssignment);
  router.delete('/:id', verifyToken, assignmentController.deleteAssignment);

module.exports = router 