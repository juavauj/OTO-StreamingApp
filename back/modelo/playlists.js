const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

var PlaylistSchema = new Schema({
    nombre:{
        type: String,
        required: true
    },
    idUsuario: {
        type: ObjectId,
        ref: 'Usuarios',
        required: true
    },
    canciones: [{
        type: ObjectId,
        ref: 'Tracks',
        required: true
    }],
    estado: {
        type: String,
        default: "activo"
    }
});

module.exports = mongoose.model('Playlist', PlaylistSchema);