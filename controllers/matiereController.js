const matiere = require("../models/matiere");
const Matiere = require("../models/matiere");
const matiereService = require("../services/matiereService");

function createMatiere (req, res, next) {
    let matiere = new Matiere();
    matiereService.create(req)
    .then(resu=>  res.json({ message: `${resu._id} saved!`}))
    .catch(error=>{res.status(400).send(error.message);})
}

function findAllMatiere (req, res, next) {
    Matiere.find({}, function (err, matieres) {
        if (err) return res.status(500).send("Impossible de trouver les matieres.");
        res.status(200).send(matieres);
    });
};




function findMatiere (req, res, next) {
    Matiere.findById(req.params.id, function (err, matiere) {
        if (err) return res.status(500).send("Impossible de trouver la matiere.");
        if (!matiere) return res.status(404).send("Aucune matiere trouvée.");
        res.status(200).send(matiere);
    });
};


function deleteMatiere (req, res, next) {
    Matiere.findByIdAndRemove(req.params.id, function (err, matiere) {
        if (err) return res.status(500).send("Impossible de supprimer une matiere.");
        res.status(200).send("Matiere: "+ matiere.name +" a été supprimée.");
    });
};


function updateMatiere (req, res, next) {
    Matiere.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, matiere) {
        if (err) return res.status(500).send("Impossible de modifier une matiere.");
        res.status(200).send(matiere);
    });
};


module.exports = { createMatiere, findAllMatiere, findMatiere, deleteMatiere, updateMatiere }