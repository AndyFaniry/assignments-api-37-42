const { ObjectId } = require('mongodb');
let Assignment = require('../models/assignment');
const assignment = require('../models/assignment');

// Récupérer tous les assignments (GET)
function getAssignmentsSansPagination(req, res, next){
    Assignment.find((err, assignments) => {
        if(err){
            res.status(500).send(err);
        }
        res.status(200).send(assignments);
    });
}

function getAssignments(req, res, next) {
    var aggregateQuery = Assignment.aggregate()
    console.log(req.query)
    if(req.query.matiere) aggregateQuery.match({ matiere : new ObjectId(req.query.matiere)})
    if(req.query.auteur) aggregateQuery.match({ auteur: new ObjectId(req.query.auteur)})
    
    aggregateQuery.lookup({ from: "users",localField: "auteur",foreignField : "_id", as: "auteur" });
    aggregateQuery.lookup({ from: "matieres", localField: "matiere",foreignField : "_id", as: "matiere" , 
    "pipeline": [
        { "$lookup": { from: "users", localField: "idProf",foreignField : "_id", as: "idProf" }}
      ],});
    

    Assignment.aggregatePaginate(aggregateQuery,
      {
        page: parseInt(req.query.page) || 1,
        limit: parseInt(req.query.limit) || 10,
      }) 
      .then( assignments => {
        assignments.docs.forEach(x => {
            x.matiere = x.matiere[0]
            x.matiere.idProf = x.matiere.idProf[0]
            x.auteur = x.auteur[0]
        })
        res.send(assignments);
      })
      .catch( err => res.send(err) )
   }
   
// Récupérer un assignment par son id (GET)
function getAssignment(req, res, next){
    let assignmentId = req.params.id;
    Assignment.findById(assignmentId, (err, assignment) =>{
        if(err){res.send(err)}
        res.status(200).send(assignment);
    })
}

// Ajout d'un assignment (POST)
function postAssignment(req, res, next){
    let assignment = new Assignment();
    assignment.auteur = req.body.auteur
    assignment.matiere = req.body.matiere
    assignment.nom = req.body.nom
    assignment.dateRendu = new Date(req.body.dateRendu)
    assignment.save( (err) => {
        if(err){
            res.status(500).send("Impossible d'enregistrer l'assignement");
        }
        res.status(200).send({ message: `${assignment._id} saved!`});
    })
}

// Update d'un assignment (PUT)
function updateAssignment(req, res, next) {
    let asst = req.body
    asst.dateUpdate = Date.now 
    Assignment.findByIdAndUpdate(asst._id, asst, {new: true}, (err, assignment) => {
        if (err) {
            res.status(500).send("Impossible de modifier l'assignement");
        } else {
            res.status(200).send({message: assignment._id + 'updated'});
        }
    });

}

// suppression d'un assignment (DELETE)
function deleteAssignment(req, res, next) {

    Assignment.findByIdAndRemove(req.params.id, (err, assignment) => {
        if (err) {
            res.status(500).send(err);
        }
        res.status(200).send({message: `${assignment._id} deleted`});
    })
}



module.exports = { getAssignments, postAssignment, getAssignment, updateAssignment, deleteAssignment, getAssignmentsSansPagination };
