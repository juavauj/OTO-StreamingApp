const express = require('express');
const ArtistasControl = require('../control/artistasControl');

const multipart = require('connect-multiparty');
const addArtistaDir = multipart({uploadDir: './archivos/albumArt'});

var api = express.Router();

api.get('/artistas', ArtistasControl.showArtistas);

api.post('/registrar-artista', ArtistasControl.addArtista);

api.put('/actualizar-artista/:id', ArtistasControl.actualizarArtista);

api.delete('/borrar-artista/:id', ArtistasControl.borrarArtista);

api.get('/album/:id', ArtistasControl.mostrarUnArtista);

api.put('/subir-img/:id',addArtistaDir, ArtistasControl.subirImg);

api.get('/obtenerImagen/:imageFile', ArtistasControl.mostrarArchivo);

module.exports = api;