const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

var PlaylistSchema = new Schema({
    nombre:{
        type: String,
        required: true
    },
    propietario: {
        type: ObjectId,
        required: true
    },
    canciones: [
        {
        type: String,
        required: true
        }
    ]
});

module.exports = mongoose.model('Playlist', PlaylistSchema);