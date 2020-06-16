const Playlist = require('../modelo/playlists');
const Track = require('../modelo/canciones');
const Usuario = require('../modelo/usuario');


//agregar una playlist

async function addPlaylist(req, res){
    var playlist = new Playlist();
    var parametros = req.body;

    playlist.nombre = parametros.nombre;
    playlist.idUsuario = parametros.idUsuario;
    playlist.canciones = parametros.canciones;
    playlist.estado = parametros.estado;
    
    try {
        let nuevaPlaylist = await playlist.save();
        res.send({message: "Playlist creada exitosamente", playlist: nuevaPlaylist});
    } catch (error) {
        res.status(500).send({message: "No se ha podido agregar la playlist"});
    }
}

//actualizar una playlist

async function actualizarPlaylist(req, res) {
    var playlistId = req.params.id;
    var newPlaylistData = req.body;

    try {
        let playplistActualizada = await Playlist.findByIdAndUpdate(playlistId, newPlaylistData);
        res.send({message: "Playlist actualizada exitosamente", playlist: playplistActualizada}); 
    } catch (error) {
        res.status(500).send({message: "No se ha podido actualizar la playlist"}); 
    } 
}

//borrar un genero

async function eliminarPlaylist(req, res) {
    var playlistId = req.params.id;

    try {
        let playlistEliminada = await Playlist.findByIdAndDelete(playlistId);
        res.send({message: "Playlist eliminada exitosamente", playlist: playlistEliminada}); 
    } catch (error) {
        res.status(500).send({message: "No se ha podido eliminar la playlist"}); 
    } 
}

//mostrar un genero

function mostrarUnaPlaylist(req, res) {
    var playlistId = req.params.id;

    Playlist.findById(playlistId, (err, playlistEncontrada)=>{
        if (err) {
            res.status(500).send({message: "Error en el servidor"});
        }else{
            if (!playlistEncontrada) {
                res.status(200).send({message: "No se ha podido encontrar la playlist"});
            }else{
                Track.populate(playlistEncontrada, {path:'canciones', select: 'nombre'}, (err, playlistEncontrada)=>{
                    if (playlistEncontrada) {
                        Usuario.populate(playlistEncontrada, {path:'idUsuario', select: 'nick'}, (err, playlistEncontrada)=>{
                            res.status(200).send({message: "Playlists encontradas exitosamente", 
                        playlist: playlistEncontrada}); 
                        });
                    }
                });
                                
            }    
        }    
    });
}

//mostrar varias playlist

function mostrarPlaylists(req, res) {

    Playlist.find((err, playlistEncontradas)=>{
        if (err) {
            res.status(500).send({message: "Error en el servidor"});
        }else{
            if (!playlistEncontradas) {
                res.status(200).send({message: "No se ha podido encontrar ninguna playlist"});
            }else{
                Track.populate(playlistEncontradas, {path:'canciones', select: 'nombre'}, (err, playlistEncontradas)=>{
                    if (playlistEncontradas) {
                        Usuario.populate(playlistEncontradas, {path:'idUsuario', select: 'nick'}, (err, playlistEncontradas)=>{
                            res.status(200).send({message: "Playlists encontradas exitosamente", 
                        playlist: playlistEncontradas}); 
                        });
                    }
                });
            }
        }    
    });
}

//buscar o filtar
function buscarPlaylist(req, res) {
    var resBusqueda = req.params.busqueda;

    Playlist.find({nombre: {$regex: resBusqueda, $options: 'i'}}, (err, playlistFound)=>{
        if (err) {
            res.status(500).send({message: "Error en el servidor"});
        }else{
            if (!playlistFound) {
                res.status(200).send({message: "No se ha encontrado ninguna playlist"});
            }else{
                Track.populate(playlistFound, {path:'canciones', select: 'nombre'}, (err, playlistFound)=>{
                    if (playlistFound) {
                        Usuario.populate(playlistFound, {path:'idUsuario', select: 'nick'}, (err, playlistFound)=>{
                            res.status(200).send({message: "Playlists encontradas exitosamente", 
                        playlist: playlistFound}); 
                        });
                    }
                });
            }
        }
    });
}

//Funcion filtrar por estado
async function playlistEstado(req, res){
    var estado = req.params.estado;

    try {
        const playlist = await Playlist.find({estado: estado});
        const usuarios = await Usuario.populate(playlist, {path:'idUsuario', select: 'nick'});
        const canciones = await Track.populate(playlist, {path:'canciones', select: 'nombre'});
        res.json(canciones);
    } catch (error) {
        res.status(500).send({message: "Error en el servidor"});  
    }

    
}


module.exports = {
    addPlaylist,
    actualizarPlaylist,
    eliminarPlaylist,
    mostrarPlaylists,
    mostrarUnaPlaylist,
    buscarPlaylist,
    playlistEstado
}