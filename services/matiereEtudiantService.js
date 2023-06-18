const Matiere = require("../models/matiere");
const User = require("../models/user");
const MatiereEtudiant = require("../models/matiereEtudiant");

async function createMatiereEtudiant(req) {
    let matiereEtudiant= new MatiereEtudiant();
    
    let etudiant = await User.findOne({_id:req.idEtudiant, type : 'etudiant'})
    .catch(error => {throw new Error("Une erreur est survenue lors de la récupération de l'étudiant.");} )
    if(etudiant == null ) throw new Error("Etudiant inexistant");
    matiereEtudiant.etudiant = req.idEtudiant

    let matiere = await Matiere.findById(req.idMatiere)
    .catch(error => {throw new Error("Une erreur est survenue lors de la récupération de la matière.")})
    if(matiere == null) throw new Error("Matière inexistante")
    matiereEtudiant.matiere= req.idMatiere

    return new MatiereEtudiant(matiereEtudiant).save()
    .catch(error=> { throw new Error("Une erreur lors de l'enregistrement de l'étudiant.")});
}


async function findAllMatiereByEtudiant(req) {
    let query = MatiereEtudiant.find()
    if(req.idEtudiant) query.where("etudiant").equals(req.idEtudiant)
    if(req.idMatiere)  query.where("matiere").equals(req.idMatiere)
    return query.populate('etudiant').populate('matiere').exec();
}

module.exports= {
    createMatiereEtudiant,
    findAllMatiereByEtudiant
}
