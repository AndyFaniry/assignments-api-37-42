let mongoose = require('mongoose');
let Schema = mongoose.Schema;
var aggregatePaginate = require("mongoose-aggregate-paginate-v2");

let AssignmentSchema = Schema({
    contenu: {
        type: String,
        required: true
    },
    auteur: {
        type: Number,
        required: true
    },
    matiere: {
        type: Number,
        required: true
    },
    note: {
        type: Number,
        max: 20,
        default: null
    },
    rendu: {
        type: Boolean,
        default: false
    },
    dateDeRendu: {
        type: Date,
        default: null
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

AssignmentSchema.plugin(aggregatePaginate);

// C'est à travers ce modèle Mongoose qu'on pourra faire le CRUD
// le nom de la collection (par défaut assignments) sera au pluriel, 
// soit assignments
// Si on met un nom "proche", Mongoose choisira la collection
// dont le nom est le plus proche
module.exports = mongoose.model('assignments', AssignmentSchema);
