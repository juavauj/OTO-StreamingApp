const express = require('express');
const AlbumesControl = require('../control/albumesControl');

const multipart = require('connect-multiparty');
const addArtistaDir = multipart({uploadDir: './archivos/albumes'});

var api = express.Router();

api.get('/albumes', AlbumesControl.showAlbumes);//check

api.get('/albumesEstado/:estado', AlbumesControl.albumEstado);//check

api.get('/buscar-albumes/:busqueda', AlbumesControl.buscarAlbum);//check

api.get('/album/:id', AlbumesControl.mostrarUnAlbum);//check

api.post('/registrar-album', AlbumesControl.addAlbum);//check

api.put('/actualizar-album/:id', AlbumesControl.actualizarAlbum);//chack

api.delete('/borrar-album/:id', AlbumesControl.borrarAlbum);//check

api.put('/subir-img-album/:id',addArtistaDir, AlbumesControl.subirImg);//check

api.get('/obtenerImgAlbum/:imageFile', AlbumesControl.mostrarArchivo);//check

module.exports = api;