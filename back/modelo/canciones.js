const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId

//creacion del schema de la base de datos

var CancionSchema = new Schema({
    nombre: {
        type: String,
    required: true
    },
    album: {
        type: ObjectId,
        ref: 'Albumes',
        required: true
    },
    artistas: [
        {
            type: ObjectId,
            ref:'Artistas',
            required: true
        }
    ],
    /* duracion: Number, */
    generos: [String],
    anio: Number,
    letra: String,

    archivoCancion: {
        type: String,
        default: null
    }
    /*reproducciones: Number*/
})

//exportar el modelo
module.exports = mongoose.model('Cancion', CancionSchema);