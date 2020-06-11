const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

var AlbumSchema = new Schema({
    
    titulo: {
        type: String,
        required: true
    },
    artistas: [{
        type: ObjectId,
        ref: 'Artistas',
        required: true
    }],
    canciones: [{
        type: ObjectId,
        ref: 'Tracks',
        required: true
    }],
    generos: Array,
    disquera: String,
    anio: Number,
    imagen: {
        type: String,
        default: null
    },
    estado: {
        type: String,
        default: null
    }
});

module.exports = mongoose.model('Album', AlbumSchema);