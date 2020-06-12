const express = require('express');
const CancionControl = require('../control/cancionesControl');

const multipart = require('connect-multiparty');
const subirAudioDirectorio = multipart({uploadDir: './archivos/canciones'});

var api = express.Router();

api.get('/canciones', CancionControl.showCanciones); //check

api.get('/canciones-estado/:estado', CancionControl.cancionesEstado);//check

api.get('/cancion/:id', CancionControl.mostrarUnaCancion);//check

api.get('/buscar-cancion/:busqueda', CancionControl.buscarCancion);//check

api.post('/registrar-cancion', CancionControl.addCancion);//check

api.put('/actualizar-cancion/:id', CancionControl.actualizarCancion);//check

api.delete('/borrar-cancion/:id', CancionControl.borrarCancion);//check

api.put('/subir-audio/:id', subirAudioDirectorio, CancionControl.subirAudios);//check


module.exports = api;

