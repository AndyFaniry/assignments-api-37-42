const Matiere = require("../models/matiere")
const User = require("../models/user")

async function create(req) {
    let matiere = new Matiere()
    matiere.nom = req.body.nom
    matiere.idProf = req.body.idProf
    matiere.photo = req.body.photo
    let prof = await User.findOne({_id : matiere.idProf , type : "prof"})
    if(prof == null ) throw new Error("idprof invalide")
    return matiere.save()
    .then(res=> {return res;})
    .catch(error => { throw new Error('cant post matiere ')});
}

module.exports= {
    create
}