const User = require("../models/user");
let jwt = require('jsonwebtoken');
let bcrypt = require('bcryptjs');
require('dotenv').config();
const secret = process.env.secret;

function createUser (req, res, next) {
    let hashedPassword = bcrypt.hashSync(req.body.password, 8);
    User.findOne({ email: req.body.email }, function (err, user) {
        if (err) return res.status(500).send('Erreur dans le serveur.');
        if (user) return res.status(500).send('Un utilisateur avec l\'email existe déjà.');
        
        User.create({
            nom: req.body.nom,
            prenom: req.body.prenom,
            email: req.body.email,
            password: hashedPassword,
            type: req.body.type,
            photo: req.body.photo
        }, 
        function (err, user) {
            if (err) return res.status(500).send("Impossible de créer un utilisateur")
            var token = jwt.sign({ id: user._id }, secret, {
              expiresIn: 86400
            });
            user.password = null;
            res.status(200).send({ auth: true, token: token, user: user });
        });
      });
    
}

 function login (req, res, next) {

    User.findOne({ email: req.body.email }, function (err, user) {
      if (err) return res.status(500).send('Erreur dans le serveur.');
      if (!user) return res.status(404).send('Aucun utilisateur trouvé.');
      
      var passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
      if (!passwordIsValid) return res.status(401).send({ auth: false, token: null });
      
      var token = jwt.sign({ id: user._id }, secret, {
        expiresIn: 86400
      });
      
      user.password = null;
      res.status(200).send({ auth: true, token: token, user: user });
    });
    
  };

function findAllUser (req, res, next) {
    let query= User.find()
    if(req.query?.type) query.where("type").equals(req.query.type)
    query.exec({}, function (err, users) {
        if (err) return res.status(500).send("Impossible de trouver les utilisateurs.");
        res.status(200).send(users)
    });
};


function findUser (req, res, next) {
    User.findById(req.params.id, function (err, user) {
        if (err) return res.status(500).send("Impossible de trouver l'utilisateur.");
        if (!user) return res.status(404).send("Aucun utilisateur trouvé.");
        res.status(200).send(user);
    });
};


function deleteUser (req, res, next) {
    User.findByIdAndRemove(req.params.id, function (err, user) {
        if (err) return res.status(500).send("Impossible de supprimer un utilisateur.");
        res.status(200).send("User: "+ user.name +" a été supprimé.");
    });
};


function updateUser (req, res, next) {
    User.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, user) {
        if (err) return res.status(500).send("Impossible de modifier un utilisateur.");
        res.status(200).send(user);
    });
};


module.exports = { createUser, login, findAllUser, findUser, deleteUser, updateUser }