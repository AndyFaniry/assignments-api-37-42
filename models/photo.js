let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let PhotoSchema = Schema({
    name: String,
    img:
    {
        data: Buffer,
        contentType: String
    }
});

module.exports = mongoose.model('photos', PhotoSchema);