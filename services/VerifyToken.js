var jwt = require('jsonwebtoken');
require('dotenv').config();
const secret = process.env.secret;

function verifyToken(req, res, next) {
  var token = req.headers['authorization'];
  if (!token)
    return res.status(403).send({ auth: false, message: 'Aucun token reçu.' });
    
  jwt.verify(token, secret, function(err, decoded) {
    if (err)
    return res.status(500).send({ auth: false, message: 'Echec de l\'authentification.' });
      
    req.userId = decoded.id;
    next();
  });
}

module.exports = verifyToken;