const express = require('express');
const PlaylistControl = require('../control/playlistsControl');

var api = express.Router();

api.get('/playlists', PlaylistControl.mostrarPlaylists);//check

api.get('/playlists-estado/:estado', PlaylistControl.playlistEstado);//check

api.get('/mostrar-playlist/:id', PlaylistControl.mostrarUnaPlaylist);//check

api.get('/buscar-playlist/:busqueda', PlaylistControl.buscarPlaylist);//check

api.post('/agregar-playlist', PlaylistControl.addPlaylist);//check

api.put('/actualizar-playlist/:id', PlaylistControl.actualizarPlaylist);//check

api.delete('/borrar-playlist/:id', PlaylistControl.eliminarPlaylist);//check



module.exports = api;