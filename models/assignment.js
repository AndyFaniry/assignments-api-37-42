let mongoose = require('mongoose');
let Schema = mongoose.Schema;
var aggregatePaginate = require("mongoose-aggregate-paginate-v2");

let AssignmentSchema = Schema({
    nom: {
        type: String,
        required: true
    },
    auteur: {
        type: Schema.Types.ObjectId, 
        ref: 'users' ,
        required :true
    },
    matiere: {
        type: Schema.Types.ObjectId, 
        ref: 'matieres' ,
        required : true
    },
    note: {
        type: Number,
        max: 20,
        default: null
    },
    remarque:  String,
    dateRendu: {
        type: Date,
        required : true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    rendu : {
        type : Boolean,
        default : false
    },
    updatedAt: {
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
