const express = require('express');
const CancionControl = require('../control/cancionesControl');

const multipart = require('connect-multiparty');
const subirAudioDirectorio = multipart({uploadDir: './archivos/canciones'});

var api = express.Router();

api.get('/canciones', CancionControl.showCanciones);

api.get('/canciones-estado', CancionControl.cancionesEstado);

api.post('/registrar-cancion', CancionControl.addCancion);

api.put('/actualizar-cancion/:id', CancionControl.actualizarCancion);

api.delete('/borrar-cancion/:id', CancionControl.borrarCancion);

api.get('/cancion/:id', CancionControl.mostrarUnaCancion);

api.put('/subir-audio/:id',subirAudioDirectorio, CancionControl.subirAudios);

api.get('/buscar-cancion/:busqueda', CancionControl.buscarCancion);


module.exports = api;

