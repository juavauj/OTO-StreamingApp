import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../modelo/usuario';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.component.html',
  styleUrls: ['./perfil-usuario.component.scss']
})
export class PerfilUsuarioComponent implements OnInit {
  public rutaImagen;

  // Declarar la variable usuarioActualizar

  public usuarioActualizar: Usuario;

  // Declara la variable archivoSubir de tipo File
  public archivoSubir: File;

  //Declarar la variable identidad
  public identidad;

  //Declarar la variable url
  public url: String;

  constructor(
    private usuarioService: UsuarioService
  ) {
    this.url = usuarioService.url;
  }

  ngOnInit(): void {
    // usuarioActualizar = {nombre: "Pepe", apellido}
    this.usuarioActualizar = JSON.parse(localStorage.getItem('sesion'));
    this.identidad = this.usuarioService.obtenerNombreUsuario();

    this.rutaImagen= this.url + 'obtenerImgUsuario/' + this.usuarioActualizar.imagen;
  }

 

 
}
