
const { ObjectId } = require('mongodb');
let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let MatiereSchema = Schema({
    nom: String,
    idProf: ObjectId,
    photo: String
});

module.exports = mongoose.model('matieres', MatiereSchema);