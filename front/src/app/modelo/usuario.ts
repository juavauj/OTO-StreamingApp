export class Usuario {
  constructor(
    public _id: String,
    public nombre: String,
    public apellido: String,
    public correo: String,
    public contrasena: String,
    public nick: String,
    public rol: String,
    public tipoSuscripcion: String,
    public estado: String,
    public imagen: String
  ) {}
}
