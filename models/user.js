let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let UserSchema = Schema({
    nom: String,
    prenom: String,
    email: String,
    password: String,
    type: String,
    idPhoto: Number
});

module.exports = mongoose.model('users', UserSchema);