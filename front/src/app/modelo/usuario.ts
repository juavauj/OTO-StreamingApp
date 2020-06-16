export class Usuario {
  constructor(
    public _id: String,
    public nombre: String,
    public apellido: String,
    public usuario: String,
    public correo: String,
    public contrasena: String,
    public rol: String,
    public imagen: String
  ) {}
}
