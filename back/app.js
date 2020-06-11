// Archivo para lógica de express (Manejo de rutas, exportación del módulo y manejo de middlewares)

const express = require('express');
const app = express();
// Declaración de cors 
const cors = require('cors');

// Declaración de rutas a ejecutar por express
const usuarioRutas = require('./rutas/usuarioRutas');
const cancionRutas = require('./rutas/cancionesRutas');
const artistaRutas = require('./rutas/ArtistasRutas');
const albumRutas = require('./rutas/albumesRutas');
const playlistRutas = require('./rutas/playlistsRutas');

// -- Inicio Middlewares --
app.use(express.json());
app.use(cors());

// Consumo de las rutas
app.use('/api', usuarioRutas);
app.use('/api', cancionRutas);
app.use('/api', artistaRutas);
app.use('/api', albumRutas);
app.use('/api', playlistRutas);

// -- Fin Middlewares --

// Exportación módulo
module.exports = app;