const express = require('express');
const PlaylistControl = require('../control/playlistsControl');

var api = express.Router();

api.get('/playlists', PlaylistControl.mostrarPlaylists);

api.get('/playlists-estado', PlaylistControl.playlistEstado);

api.post('/agregar-playlist', PlaylistControl.addPlaylist);

api.put('/actualizar-playlist/:id', PlaylistControl.actualizarPlaylist);

api.get('/mostrar-playlist/:id', PlaylistControl.mostrarUnaPlaylist);

api.get('/borrar-playlist/:id', PlaylistControl.eliminarPlaylist);

api.get('/buscar-playlist/:busqueda', PlaylistControl.buscarPlaylist);



module.exports = api;