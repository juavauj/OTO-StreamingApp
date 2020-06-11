const Artista = require('../modelo/artistas');

const fs = require('fs');
const path = require('path');

//agregar un artista
function addArtista(req, res){
    var artista = new Artista();
    var parametros = req.body;

    artista.nombre = parametros.nombre;
    artista.generos = [parametros.generos];
    artista.imagen = null;
    artista.biografia = parametros.biografia;
    artista.estado = parametros.estado;

    artista.save((err, artistaNuevo)=>{
        if (err) {
            res.status(500).send({message: "Error en el servidor"});
        }else{
            if (!artistaNuevo) {
                res.status(200).send({message: "No ha sipo posible registrar el artista"});
            }else{
                res.status(200).send({
                    message: "Artista agregado", 
                    artista: artistaNuevo
                });
            }
        }
    });
}
//actualizar un artista

function actualizarArtista(req, res) {
    var artistaId = req.params.id;
    var nuevosDatosArtista = req.body;

    Artista.findByIdAndUpdate(artistaId, nuevosDatosArtista, (err, artistaActualizado)=>{
        if (err) {
            res.status(500).send({message: "Error en el servidor"});
        }else{
            if (!artistaActualizado) {
                res.status(200).send({message: "No ha sipo posible actualizar el artista"});
            }else{
                res.status(200).send({
                    message: "Artista actualizado", 
                    artista: artistaActualizado
                });
            }
        }
    });


}

//borrar un artista

function borrarArtista(req, res){
    var artistaId = req.params.id;

    Artista.findOneAndDelete(artistaId, (err, artistaEliminado)=>{
        if (err) {
            res.status(500).send({message: "Error en el servidor"});
        }else{
            if (!artistaEliminado) {
                res.status(200).send({message: "No ha sido posible eliminar el registro"});
            }else{
                res.status(200).send({
                    message: "Artista eliminado", 
                    artista: artistaEliminado
                });
            }
        }
    });
}

//mostrar un artista

function mostrarUnArtista(req, res) {
    var artistaId = req.params.id;

    Artista.findOne(artistaId, (err, artistaEncontrado)=>{
        if (err) {
            res.status(500).send({message: "Error en el servidor"});
        }else{
            if (!artistaEncontrado) {
                res.status(200).send({message: "No ha sido posible encontrar el artista"});
            }else{
                res.status(200).send({
                    message: "Artista encontrado", 
                    artista: artistaEncontrado
                });
            }
        }
    })
}

//mostrar todos los artistas

function showArtistas(req, res) {

    Artista.find((err, artistasEncontrados)=>{
        if (err) {
            res.status(500).send({message: "Error en el servidor"});
        }else{
            if (!artistasEncontrados) {
                res.status(200).send({message: "No ha sido posible encontrar artistas"});
            }else{
                res.status(200).send({
                    message: "Artistas encontrados", 
                    artista: artistasEncontrados
                });
            }
        }
    });
}

function subirImg(req, res){
    var artistaId = req.params.id;
    var nombreArchivo = "No ha subido ninguna imagen...";

    if(req.files){
        
        var rutaArchivo = req.files.imagen.path;
        var partirArchivo = rutaArchivo.split('\\');
        var nombreArchivo = partirArchivo[2];
        var extensionImg = nombreArchivo.split('\.');
        var extensionArchivo = extensionImg[1];

        if(extensionArchivo == 'png' || extensionArchivo == 'jpg'){

            Artista.findByIdAndUpdate(artistaId, {imagen: nombreArchivo}, (err, artistaImg)=>{
                if(err){
                    res.status(500).send({message: "Error en el servidor"});
                }else{
                    if(!artistaImg){
                        res.status(200).send({message: "No fue posible subir la imagen"});
                    }else{
                        res.status(200).send({
                            message: "Imagen anexada",
                            imagen: nombreArchivo,
                            artista: artistaImg
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
    var ruta = './archivos/artistas/'+archivo;

    // Validar si existe o no 
    fs.exists(ruta, (exists)=>{
        if(exists){
            res.sendFile(path.resolve(ruta));
        }else{
            res.status(200).send({message: "Imagen no encontrada"});
        }
    });
}

function buscarArtista(req, res) {
    var resBusqueda = req.params.busqueda;

    Artista.find({nombre: {$regex: resBusqueda, $options: 'i'}}, (err, artistaFound)=>{
        if (err) {
            res.status(500).send({message: "Error en el servidor"});
        }else{
            if (!artistaFound) {
                res.status(200).send({message: "No se ha encontrado ningún artista"});
            }else{
                res.status(200).send({
                    message: "artistas encontrados", 
                    artista: artistaFound
                });
            }
        }
    });
}

//Funcion filtrar por estado
async function artistasEstado(req, res){
    const artists = await Artista.find({estado: "activo"});
    res.json(artists);
}
//mostrar artistaes del artista


//mostrar canciones del artista


//exportar modulos

module.exports = {
    showArtistas,
    addArtista,
    mostrarUnArtista,
    borrarArtista,
    actualizarArtista,
    subirImg,
    mostrarArchivo,
    buscarArtista,
    artistasEstado
}

