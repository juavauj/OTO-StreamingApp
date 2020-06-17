export class Playlist{
    constructor(
        public _id: String,
        public nombre:String,
        public idUsuario: String /* ObjectId */,
        public canciones: String[] /* ObjectId */,
        public estado: String,
    ){}
}