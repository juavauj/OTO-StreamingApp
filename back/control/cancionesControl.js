const Track = require('../modelo/canciones');
const Album = require('../modelo/albumes');
const Artista = require('../modelo/artistas');


//imports para multimedia
const fs = require('fs');
const path = require('path');

//subir cancion
async function addCancion(req, res) {
    var cancion = new Track();
    var parametros = req.body;

    cancion.nombre = parametros.nombre;
    cancion.idAlbum = parametros.idAlbum;
    cancion.idArtista = parametros.idArtista;
    cancion.duracion = parametros.duracion;
/*  cancion.generos = parametros.generos;
    cancion.anio = parametros.anio;
    cancion.letra = parametros.letra;*/    
    cancion.archivoAudio = null;
    cancion.estado = parametros.estado;    

    try {
        let cancionNueva = await cancion.save();
        res.send({message: "Canción registrada", cancion: cancionNueva});
    } catch (error) {
        res.status(500).send({message: "No ha sido posible registrar la canción"});
    }
}

//actualizar cancion
async function actualizarCancion(req, res) {
    var cancionId = req.params.id;
    var newDataCancion = req.body;

    try {
        let cancionActualizada = await Track.findByIdAndUpdate(cancionId, newDataCancion);
        res.send({message: "Canción actualizada", cancion: cancionActualizada}); 
    } catch (error) {
        res.status(500).send({message: "No ha sido posible actualizar la canción"}); 
    } 
}

//borrar cancion
async function borrarCancion(req, res) {
    var usuarioId = req.params.id;
    try {
        let cancionBorrada = await Track.findByIdAndDelete(usuarioId);
        res.send({message: "Canción eliminada", cancion: cancionBorrada});
    } catch (error) {
        res.status(500).send({message: "No ha sido posible eliminar la canción"}); 
    }  
}

//mostrar canciones
function showCanciones(req, res) {
    Track.find((err, cancionesEncontradas)=>{
        if (err) {
            res.status(500).send({message: "Error en el servidor"});
        }else{
            if (!cancionesEncontradas) {
                res.status(200).send({message: "No ha sido posible encontrar canciones"});
            }else{
                Album.populate(cancionesEncontradas, {path:'idAlbum', select: 'nombre imagen'}, (err, cancionesEncontradas)=>{
                    if (cancionesEncontradas) {
                        Artista.populate(cancionesEncontradas, {path:'idArtista', select: 'nombre'}, (err, cancionesEncontradas)=>{
                            res.status(200).send({message: "Canciones encontradas exitosamente", 
                                cancion: cancionesEncontradas}); 
                        });
                    }
                });
            }
        }
    });
}

//mostrar una cancion
function mostrarUnaCancion(req, res) {
    var cancionId = req.params.id;

    Track.findById(cancionId, (err, cancionEncontrada)=>{
        if (err) {
            res.status(500).send({message: "Error en el servidor"});
        }else{
            if (!cancionEncontrada) {
                res.status(200).send({message: "No ha sido posible encontrar canciones"});
            }else{
                Album.populate(cancionEncontrada, {path:'idAlbum', select: 'nombre imagen'}, (err, cancionEncontrada)=>{
                    if (cancionEncontrada) {
                        Artista.populate(cancionEncontrada, {path:'idArtista', select: 'nombre'}, (err, cancionEncontrada)=>{
                            res.status(200).send({message: "Canciones encontradas exitosamente", 
                            cancion: cancionEncontrada}); 
                        });
                    }
                });
            }
        }
    })
}

//buscar o filtar

function buscarCancion(req, res) {
    var resBusqueda = req.params.busqueda;

    Track.find({nombre: {$regex: resBusqueda, $options: 'i'} }, (err, cancionFound)=>{
        if (err) {
            res.status(500).send({message: "Error en el servidor"});
        }else{
            if (!cancionFound) {
                res.status(200).send({message: "No se ha encontrado ninguna canción"});
            }else{
                Album.populate(cancionFound, {path:'idAlbum', select: 'nombre imagen'}, (err, cancionFound)=>{
                    if (cancionFound) {
                        Artista.populate(cancionFound, {path:'idArtista', select: 'nombre'}, (err, cancionFound)=>{
                            res.status(200).send({message: "Canciones encontradas exitosamente", 
                            cancion: cancionFound}); 
                        });
                    }
                });
            }
        }
    });
}

//Funcion filtrar por estado
async function cancionesEstado(req, res){
    var estado = req.params.estado;

    try {
        const songs = await Track.find({estado: estado})
        const albums = await Album.populate(songs, {path:'idAlbum', select: 'nombre imagen'});
        const artists = await Artista.populate(songs, {path:'idArtista', select: 'nombre'});
        
        res.json(artists);
    } catch (error) {
        res.status(500).send({message: "No ha sido posible encontrar canciones"}); 
    }   
}

//agregar canciones mp3
function subirAudios(req, res) {
    var cancionId = req.params.id;
    var nombreArchivo = "No ha subido ningún archivo...";
    
    if (req.files) {
        var rutaArchivo = req.files.archivoAudio.path;
        var filesplit = rutaArchivo.split('\\');
        var nombreArchivo = filesplit[2];
        var extension = nombreArchivo.split('\.');
        var extensionArchivo = extension[1];

        if (extensionArchivo == 'mp3') {
            Track.findByIdAndUpdate(cancionId, {archivoAudio: nombreArchivo}, (err, cancionTrack)=>{
                console.log(cancionTrack)
                if(err){
                    res.status(500).send({message: "Error en el servidor"});
                }else{
                    if(!cancionTrack){
                        res.status(200).send({message: "No fue posible subir la canción"});
                    }else{
                        res.status(200).send({
                            message: "canción anexada",
                            archivoAudio: nombreArchivo,
                            cancion: cancionTrack
                        });
                    }
                }
            });
        }else{
            // Formato no valido
            res.status(200).send({message: "Formato inválido! No es un archivo de audio admitido"});
        }

    }else{
        res.status(200).send({message: "No has subido archivos"});
    }
}

//exportar el modulo

module.exports = {
    addCancion,
    showCanciones,
    actualizarCancion,
    borrarCancion,
    mostrarUnaCancion,
    subirAudios,
    buscarCancion,
    cancionesEstado
}


