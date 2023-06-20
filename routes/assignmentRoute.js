const express = require('express');
const router = express.Router();
const assignmentController = require('../controllers/assignmentController');
const VerifyToken = require('../services/VerifyToken');

  router.get('/', VerifyToken , assignmentController.getAssignments);
  router.post('/',VerifyToken ,  assignmentController.postAssignment);
  router.put('/', VerifyToken , assignmentController.updateAssignment);
  router.get('/:id',VerifyToken ,  assignmentController.getAssignment);
  router.delete('/:id',VerifyToken,  assignmentController.deleteAssignment);

module.exports = router 