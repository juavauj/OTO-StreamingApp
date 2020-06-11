const Playlist = require('../modelo/playlists');
const Cancion = require('../modelo/canciones');
const Usuario = require('../modelo/usuario');


//agregar una playlist

function addPlaylist(req, res){
    var playlist = new Playlist();
    var parametros = req.body;

    playlist.nombre = parametros.nombre;
    playlist.propietario = parametros.propietario;
    playlist.canciones = parametros.canciones;
    playlist.estado = parametros.estado;
    
    playlist.save((err, nuevaPlaylist)=>{
        if (err) {
            res.status(500).send({message: "Error en el servidor"});
        }else{
            if (!nuevaPlaylist) {
                res.status(200).send({message: "No se ha podido agregar la playlist"});
            }else{
                res.status(200).send({message: "Playlist creada exitosamente", 
                playlist: nuevaPlaylist})
            }
        }
    })
}

//actualizar una playlist

function actualizarPlaylist(req, res) {
    var playlistId = req.params.id;
    var newPlaylistData = req.body;

    Playlist.findByIdAndUpdate(playlistId, newPlaylistData, (err, playplistActualizada)=>{
        if (err) {
            res.status(500).send({message: "Error en el servidor"});
        }else{
            if (!playplistActualizada) {
                res.status(200).send({message: "No se ha podido actualizar la playlist"});
            }else{
                res.status(200).send({message: "Playlist actualizada exitosamente", 
                playlist: playplistActualizada});
            }
        }
    });
}

//borrar un genero

function eliminarPlaylist(req, res) {
    var playlistId = req.params.id;

    Playlist.findByIdAndDelete(playlistId, (err, playlistEliminada)=>{
        if (err) {
            res.status(500).send({message: "Error en el servidor"});
        }else{
            if (!playlistEliminada) {
                res.status(200).send({message: "No se ha podido eliminar la playlist"});
            }else{
                res.status(200).send({message: "Playlist eliminada exitosamente", 
                playlist: playlistEliminada});
            }
        } 
    });
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
                Cancion.populate(playlistEncontrada, {path:'canciones', select: 'nombre -_id'}, (err, playlistEncontrada)=>{
                    if (playlistEncontrada) {
                        Usuario.populate(playlistEncontrada, {path:'propietario', select: 'nombre -_id'}, (err, playlistEncontrada)=>{
                            res.status(200).send({message: "Playlists encontradas exitosamente", 
                        playlist: playlistEncontrada}); 
                        });
                    }
                });
                                
            }    
        }    
    });
}


//mostrar canciones de la playlist


//mostrar varias playlist

function mostrarPlaylists(req, res) {

    Playlist.find((err, playlistEncontradas)=>{
        if (err) {
            res.status(500).send({message: "Error en el servidor"});
        }else{
            if (!playlistEncontradas) {
                res.status(200).send({message: "No se ha podido encontrar ninguna playlist"});
            }else{
                Cancion.populate(playlistEncontradas, {path:'canciones', select: 'nombre -_id'}, (err, playlistEncontradas)=>{
                    if (playlistEncontradas) {
                        Usuario.populate(playlistEncontradas, {path:'propietario', select: 'nombre -_id'}, (err, playlistEncontradas)=>{
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
                Cancion.populate(playlistFound, {path:'canciones', select: 'nombre -_id'}, (err, playlistFound)=>{
                    if (playlistFound) {
                        Usuario.populate(playlistFound, {path:'propietario', select: 'nombre -_id'}, (err, playlistFound)=>{
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
    const playlist = await Playlist.find({estado: "activo"});
    
    res.json(playlist);
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