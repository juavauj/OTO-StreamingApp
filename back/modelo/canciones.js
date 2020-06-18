
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId

//creacion del schema de la base de datos

var TrackSchema = new Schema({
    nombre: {
        type: String,
    required: true
    },
    idAlbum: {
        type: ObjectId,
        ref: 'Albums',
        required: true
    },
    idArtista: 
        {
            type: ObjectId,
            ref:'Artistas',
            required: true
        },
    duracion: Number,
    /* genero: String,
    anio: Number,
    letra: String, */

    archivoAudio: {
        type: String,
        default: null
    },
    estado: {
        type: String,
        default: null
    },
   /*  duracion: Number */
})

//exportar el modelo
module.exports = mongoose.model('Track', TrackSchema);