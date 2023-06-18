const matiereEtudiantService = require("../services/matiereEtudiantService");

function findAllMatiereByEtudiant(req,res,next){
    matiereEtudiantService.findAllMatiereByEtudiant(req.query)
    .then(resu=>  {res.status(200).send(resu) })
    .catch(error=>{ console.log("error ") ; res.status(400).send(error.message);})
}

function createMatiereEtudiant(req, res, next) {
    matiereEtudiantService.createMatiereEtudiant(req.body)
    .then(resu=>  res.json({ message: `${resu._id} saved!`}))
    .catch(error=>{ console.log(error) ; 
    res.status(400).send("Impossible de trouver les matières de cette étudiant.");})
}


module.exports = { 
    createMatiereEtudiant ,
    findAllMatiereByEtudiant
}