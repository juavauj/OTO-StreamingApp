const Cancion = require('../modelo/canciones');
//imports para multimedia
const fs = require('fs');
const path = require('path');

//subir cancion
function addCancion(req, res) {
    var cancion = new Cancion();
    var parametros = req.body;

    cancion.nombre = parametros.nombre;
    cancion.album = parametros.album;
    cancion.artistas = parametros.artistas;
    cancion.generos = parametros.generos;
    cancion.anio = parametros.anio;
    cancion.letra = parametros.letra;
    cancion.archivoCancion = null;
    console.log(parametros);
    

    cancion.save((err, cancionNueva)=>{
        if (err) {
            res.status(500).send({message: "Error en el servidor"});
        }else{
            if (!cancionNueva) {
                res.status(200).send({message: "No ha sipo posible registrar la canción"});
            }else{
                res.status(200).send({
                    message: "Canción registrada", 
                    cancionNueva
                });
            }
        }
    });
}

//mostrar canciones

function showCanciones(req, res) {
    Cancion.find((err, cancionesEncontradas)=>{
        if (err) {
            res.status(500).send({message: "Error en el servidor"});
        }else{
            if (!cancionesEncontradas) {
                res.status(200).send({message: "No ha sido posible encontrar canciones"});
            }else{
                res.status(200).send({
                    message: "Canciones encontradas", 
                    cancionesEncontradas
                });
            }
        }
    });
}

//actualizar cancion

function actualizarCancion(req, res){
    var cancionId = req.params.id;
    var newDataCancion = req.body;

    Cancion.findOneAndUpdate(cancionId, newDataCancion, (err, cancionActualizada)=>{
        if (err) {
            res.status(500).send({message: "Error en el servidor"});
        }else{
            if (!cancionActualizada) {
                res.status(200).send({message: "No ha sido posible actualizar la canción"});
            }else{
                res.status(200).send({
                    message: "Canción actualizada", 
                    cancionActualizada
                });
            }
        }
    });
}

//borrar cancion

function borrarCancion(req, res){
    var cancionId = req.params.id;

    Cancion.findOneAndDelete(cancionId, (err, cancionEliminada)=>{
        if (err) {
            res.status(500).send({message: "Error en el servidor"});
        }else{
            if (!cancionEliminada) {
                res.status(200).send({message: "No ha sido posible eliminar la canción"});
            }else{
                res.status(200).send({
                    message: "Canción eliminada", 
                    cancionEliminada
                });
            }
        }
    });
}

//mostrar una cancion

function mostrarUnaCancion(req, res) {
    var cancionId = req.params.id;

    Cancion.findOne(cancionId, (err, cancionEncontrada)=>{
        if (err) {
            res.status(500).send({message: "Error en el servidor"});
        }else{
            if (!cancionEncontrada) {
                res.status(200).send({message: "No ha sido posible encontrar canciones"});
            }else{
                res.status(200).send({
                    message: "Canción encontrada", 
                    cancionEncontrada
                });
            }
        }
    })
}

//agregar canciones mp3

function subirAudios(req, res) {
    var cancionId = req.params.id;
    var nombreArchivo = "No ha subido ningún archivo...";
    
    if (req.files) {
        var rutaArchivo = req.files.archivoCancion.path;
        var filesplit = rutaArchivo.split('\\');
        var nombreArchivo = filesplit[2];
        var extension = nombreArchivo.split('\.');
        var extensionArchivo = extension[1];

        if (extensionArchivo == 'mp3') {
            Cancion.findByIdAndUpdate(cancionId, {archivoCancion: nombreArchivo}, (err, cancionImg)=>{
                if(err){
                    res.status(500).send({message: "Error en el servidor"});
                }else{
                    if(!cancionImg){
                        res.status(200).send({message: "No fue posible subir la canción"});
                    }else{
                        res.status(200).send({
                            message: "canción anexada",
                            imagen: nombreArchivo,
                            cancion: cancionImg
                        });
                    }
                }
            });
        }

    }
}

//exportar el modulo

module.exports = {
    addCancion,
    showCanciones,
    actualizarCancion,
    borrarCancion,
    mostrarUnaCancion,
    subirAudios
}


