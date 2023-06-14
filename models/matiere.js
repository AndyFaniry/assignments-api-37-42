let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let MatiereSchema = Schema({
    nom: String,
    idProf: Number,
    photo: String
});

module.exports = mongoose.model('matieres', MatiereSchema);