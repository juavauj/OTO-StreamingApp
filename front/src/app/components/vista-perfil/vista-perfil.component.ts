import { Component, OnInit } from '@angular/core';

import { Usuario } from '../../modelo/usuario';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-vista-perfil',
  templateUrl: './vista-perfil.component.html',
  styleUrls: ['./vista-perfil.component.scss']
})
export class VistaPerfilComponent implements OnInit {


  //Declarar la variable identidad
  public identidad;

  constructor(
    private usuarioService: UsuarioService
  ) {
  }

  ngOnInit(): void {
    // usuarioActualizar = {nombre: "Pepe", apellido}
    this.identidad = this.usuarioService.obtenerNombreUsuario();
    console.log(this.identidad)
  }


}
