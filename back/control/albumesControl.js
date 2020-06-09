const Album = require('../modelo/albumes');

const fs = require('fs');
const path = require('path');

//agregar un album
function addAlbum(req, res){
    var album = new Album();
    var parametros = req.body;

    album.nombre = parametros.nombre;
    album.generos = [parametros.generos];
    album.imagen = null;
    album.biografia = parametros.biografia;

    album.save((err, albumNuevo)=>{
        if (err) {
            res.status(500).send({message: "Error en el servidor"});
        }else{
            if (!albumNuevo) {
                res.status(200).send({message: "No ha sipo posible registrar el album"});
            }else{
                res.status(200).send({
                    message: "Album agregado", 
                    albumNuevo
                });
            }
        }
    });
}
//actualizar un album

function actualizarAlbum(req, res) {
    var albumId = req.params.id;
    var nuevosDatosAlbum = req.body;

    Album.findByIdAndUpdate(albumId, nuevosDatosAlbum, (err, albumActualizado)=>{
        if (err) {
            res.status(500).send({message: "Error en el servidor"});
        }else{
            if (!albumActualizado) {
                res.status(200).send({message: "No ha sipo posible actualizar el album"});
            }else{
                res.status(200).send({
                    message: "Album actualizado", 
                    albumActualizado
                });
            }
        }
    });


}

//borrar un album

function borrarAlbum(req, res){
    var albumId = req.params.id;

    Album.findOneAndDelete(albumId, (err, albumEliminado)=>{
        if (err) {
            res.status(500).send({message: "Error en el servidor"});
        }else{
            if (!albumEliminado) {
                res.status(200).send({message: "No ha sido posible eliminar el registro"});
            }else{
                res.status(200).send({
                    message: "Album eliminado", 
                    albumEliminado
                });
            }
        }
    });
}

//mostrar un artista

function mostrarUnAlbum(req, res) {
    var albumId = req.params.id;

    Album.findOne(albumId, (err, albumEncontrado)=>{
        if (err) {
            res.status(500).send({message: "Error en el servidor"});
        }else{
            if (!albumEncontrado) {
                res.status(200).send({message: "No ha sido posible encontrar el album"});
            }else{
                res.status(200).send({
                    message: "Album encontrado", 
                    albumEncontrado
                });
            }
        }
    })
}

//mostrar todos los artistas

function showAlbumes(req, res) {

    Album.find((err, albumesEncontrados)=>{
        if (err) {
            res.status(500).send({message: "Error en el servidor"});
        }else{
            if (!albumesEncontrados) {
                res.status(200).send({message: "No ha sido posible encontrar albumes"});
            }else{
                res.status(200).send({
                    message: "Albumes encontrados", 
                    albumesEncontrados
                });
            }
        }
    });
}

function subirImg(req, res){
    var albumId = req.params.id;
    var nombreArchivo = "No ha subido ninguna imagen...";

    if(req.files){
        
        var rutaArchivo = req.files.imagen.path;
        var partirArchivo = rutaArchivo.split('\\');
        var nombreArchivo = partirArchivo[2];
        var extensionImg = nombreArchivo.split('\.');
        var extensionArchivo = extensionImg[1];

        if(extensionArchivo == 'png' || extensionArchivo == 'jpg'){

            Album.findByIdAndUpdate(albumId, {imagen: nombreArchivo}, (err, albumImg)=>{
                if(err){
                    res.status(500).send({message: "Error en el servidor"});
                }else{
                    if(!albumImg){
                        res.status(200).send({message: "No fue posible subir la imagen"});
                    }else{
                        res.status(200).send({
                            message: "Imagen anexada",
                            imagen: nombreArchivo,
                            artista: albumImg
                        });
                    }
                }
            });
        }else{
            res.status(200).send({message: "Formato inválido! El archivo no es una imagen"});
        }
    }else{
        res.status(200).send({message: "No has subido imagenes"});
    }
}

// Función mostrar archivo
function mostrarArchivo(req, res){

    var archivo = req.params.imageFile;
    var ruta = './archivos/albumArt/'+archivo;

    // Validar si existe o no 
    fs.exists(ruta, (exists)=>{
        if(exists){
            res.sendFile(path.resolve(ruta));
        }else{
            res.status(200).send({message: "Imagen no encontrada"});
        }
    });
}

//mostrar albumes del artista


//mostrar canciones del artista


//exportar modulos

module.exports = {
    addAlbum,
    showAlbumes,
    borrarAlbum,
    actualizarAlbum,
    mostrarUnAlbum,
    subirImg,
    mostrarArchivo,
}