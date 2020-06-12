const express = require('express');
const ArtistasControl = require('../control/artistasControl');

const multipart = require('connect-multiparty');
const addArtistaDir = multipart({uploadDir: './archivos/artistas'});

var api = express.Router();

api.get('/artistas', ArtistasControl.showArtistas);//check 

api.get('/artistas-estado/:estado', ArtistasControl.artistasEstado);//check 

api.get('/buscar-artistas/:busqueda', ArtistasControl.buscarArtista);//check 

api.get('/artista/:id', ArtistasControl.mostrarUnArtista);//check 

api.post('/registrar-artista', ArtistasControl.addArtista);//check 

api.put('/actualizar-artista/:id', ArtistasControl.actualizarArtista);//check 

api.delete('/borrar-artista/:id', ArtistasControl.borrarArtista);//check 

api.put('/subir-img-artista/:id',addArtistaDir, ArtistasControl.subirImg);//check

api.get('/obtenerImgArtista/:imageFile', ArtistasControl.mostrarArchivo);//check

module.exports = api;