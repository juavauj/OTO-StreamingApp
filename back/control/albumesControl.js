const Album = require('../modelo/albumes');
const Artista = require('../modelo/artistas');

const fs = require('fs');
const path = require('path');

//agregar un album
async function addAlbum(req, res){
    var album = new Album();
    var parametros = req.body;

    album.nombre = parametros.nombre;
    album.idArtista = parametros.idArtista;
    album.genero = parametros.genero;
    album.disquera = parametros.disquera;
    album.anio = parametros.anio;
    album.imagen = null;
    album.estado = parametros.estado;

    try {
        var albumNuevo = await album.save();
        res.status(200).send({message: "Album agregado", album: albumNuevo});;
    } catch (error) {
        res.status(500).send({message: "Error en el servidor"});
    }
}
//actualizar un album
async function actualizarAlbum(req, res) {
    var albumId = req.params.id;
    var nuevosDatosAlbum = req.body;

    try {
        var albumActualizado = await Album.findByIdAndUpdate(albumId, nuevosDatosAlbum);
        res.status(200).send({message: "Album actualizado", album: albumActualizado});;
    } catch (error) {
        res.status(500).send({message: "Error en el servidor"});
    }

}

//borrar un album
async function borrarAlbum(req, res){
    var albumId = req.params.id;

    try {
        var albumEliminado = await Album.findByIdAndDelete(albumId);
        res.status(200).send({message: "Album eliminado", album: albumEliminado});;
    } catch (error) {
        res.status(500).send({message: "Error en el servidor"});
    }
    
}

//mostrar un album
function mostrarUnAlbum(req, res) {
    var albumId = req.params.id;

    Album.findById(albumId, (err, albumEncontrado)=>{
        if (err) {
            res.status(500).send({message: "Error en el servidor"});
        }else{
            if (!albumEncontrado) {
                res.status(200).send({message: "No ha sido posible encontrar el album"});
            }else{
                Artista.populate(albumEncontrado, {path: 'idArtista', select: 'nombre'}, (err, albumEncontrado)=>{
                    res.status(200).send({
                    message: "Album encontrado", 
                    album: albumEncontrado
                        });
                    }
                );
            }
        }
    })
}

//mostrar todos los albumes
function showAlbumes(req, res) {

    Album.find((err, albumesEncontrados)=>{
        if (err) {
            res.status(500).send({message: "Error en el servidor"});
        }else{
            if (!albumesEncontrados) {
                res.status(200).send({message: "No ha sido posible encontrar albumes"});
            }else{
                Artista.populate(albumesEncontrados, {path: 'idArtista', select: 'nombre'}, (err, albumesEncontrados)=>{
                    res.status(200).send({
                    message: "Albumes encontrados", 
                    album: albumesEncontrados
                        });
                     }
                );
            }
        }
    });
}

//buscar o filtar
function buscarAlbum(req, res) {
    var resBusqueda = req.params.busqueda;

    Album.find({titulo: {$regex: resBusqueda, $options: 'i'}}, (err, albumFound)=>{
        if (err) {
            res.status(500).send({message: "Error en el servidor"});
        }else{
            if (!albumFound) {
                res.status(200).send({message: "No se ha encontrado ningún album"});
            }else{
                Artista.populate(albumFound, {path: 'idArtista', select: 'nombre'}, (err, albumFound)=>{
                    res.status(200).send({
                    message: "Albumes encontrados", 
                    album: albumFound
                        });
                    }
                );
            }
        }
    });
}

//Funcion filtrar por estado
async function albumEstado(req, res){
    var estado = req.params.estado;
    try {
        const albums = await Album.find({estado: estado});
        const artistas = await Artista.populate(albums, {path: 'idArtista', select: 'nombre'});
    res.json(artistas);
    } catch (error) {
        res.status(500).send({message: "Error en el servidor"});
    }
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
                            album: albumImg
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
    var ruta = './archivos/albumes/'+archivo;

    // Validar si existe o no 
    fs.exists(ruta, (exists)=>{
        if(exists){
            res.sendFile(path.resolve(ruta));
        }else{
            res.status(200).send({message: "Imagen no encontrada"});
        }
    });
}

//exportar modulos

module.exports = {
    addAlbum,
    showAlbumes,
    borrarAlbum,
    actualizarAlbum,
    mostrarUnAlbum,
    subirImg,
    mostrarArchivo,
    buscarAlbum,
    albumEstado
}