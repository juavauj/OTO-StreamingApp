const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

var ArtistaSchema = new Schema({
    nombre: {
        type: String,
        required: true
    },
    /* genero: String, */
    imagen: {
        type: String,
        default: null
    },
    biografia: String,
    estado: {
        type: String,
        default: null
    }
});

module.exports = mongoose.model('Artista', ArtistaSchema);