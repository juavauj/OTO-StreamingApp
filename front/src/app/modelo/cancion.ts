export class Cancion{
    constructor(
        public _id: String,
        public nombre: String,
        public idAlbum:String /* ObjectId */,
        public idArtista:String /* ObjectId */,    
        public duracion: Number,
        public archivoAudio:String,
        public estado:String
        /* genero: String,
        anio: Number,
        letra: String, */
       /*  duracion: Number */  
    ){}
}