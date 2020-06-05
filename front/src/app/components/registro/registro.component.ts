import { Component, OnInit } from '@angular/core';

// Importar el módelo de Usuario
import { Usuario } from '../../modelo/usuario';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss'],
})
export class RegistroComponent implements OnInit {
  // Declaración variable usuarioRegistro
  public usuarioRegistro: Usuario;

  constructor() {
    this.usuarioRegistro = new Usuario('', '', '', '', '', 'usuario', '');
  }

  ngOnInit(): void {}

  // Método registrarUsuario()
  registrarUsuario() {}
}
