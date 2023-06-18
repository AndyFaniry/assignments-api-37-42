const { ObjectId } = require('mongodb');
let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let matiereEtudiantSchema= Schema({
    matiere : { type: Schema.Types.ObjectId, ref: 'matieres' ,required : true},
    etudiant : { type: Schema.Types.ObjectId, ref: 'users',required : true }
});

module.exports = mongoose.model('matiereEtudiants', matiereEtudiantSchema);