const Matiere = require("../models/matiere");


function createMatiere (req, res, next) {
    let matiere = new Matiere();
    matiere.nom = req.body.nom
    matiere.idProf = req.body.idProf
    matiere.photo = req.body.photo;
    matiere.save( (err) => {
        if(err){
            res.send('cant post matiere ', err);
        }
        res.json({ message: `${matiere._id} saved!`})
    })
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