const express = require('express');
const AlbumesControl = require('../control/albumesControl');

const multipart = require('connect-multiparty');
const addArtistaDir = multipart({uploadDir: './archivos/albumArt'});

var api = express.Router();

api.get('/albumes', AlbumesControl.showAlbumes);

api.get('/albumesEstado', AlbumesControl.albumEstado);

api.post('/registrar-album', AlbumesControl.addAlbum);

api.put('/actualizar-album/:id', AlbumesControl.actualizarAlbum);

api.delete('/borrar-album/:id', AlbumesControl.borrarAlbum);

api.get('/album/:id', AlbumesControl.mostrarUnAlbum);

api.put('/subir-img/:id',addArtistaDir, AlbumesControl.subirImg);

api.get('/obtenerImagen/:imageFile', AlbumesControl.mostrarArchivo);

api.get('/buscar-albumes/:busqueda', AlbumesControl.buscarAlbum);

module.exports = api;