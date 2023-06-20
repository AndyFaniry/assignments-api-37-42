const express = require('express');
const router = express.Router();
const assignmentController = require('../controllers/assignmentController');
const verifyToken = require('../services/verifyToken');

  router.get('/', verifyToken , assignmentController.getAssignments);
  router.post('/',verifyToken ,  assignmentController.postAssignment);
  router.put('/', verifyToken , assignmentController.updateAssignment);
  router.get('/:id',verifyToken ,  assignmentController.getAssignment);
  router.delete('/:id',  assignmentController.deleteAssignment);

module.exports = router 