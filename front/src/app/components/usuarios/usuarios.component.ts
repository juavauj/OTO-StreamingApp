/*  import { Component, OnInit } from '@angular/core';

// Importar el módelo de Usuario
import { Usuario } from '../../modelo/usuario';
// Importar el servicio de Usuario
import { UsuarioService } from '../../services/usuario.service';

// Importar el objeto Router
import { Router, ActivatedRoute, Params } from '@angular/router';

import { NavSwitchService } from '../../services/nav-switch.service';

//Importar modulo de _http
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {

  public usuarioRegistro: Usuario;
  selectedUser: Usuario;
  usuarios: [];

  constructor(
    private usuarioService: UsuarioService,
    private _router: Router,
    private http: HttpClient
  ) { 
    this.usuarioRegistro = new Usuario('', '', '', '','', '', 'usuario', '');
  }

  ngOnInit(): void {
   
  }

  registrarUsuario() {
    this.usuarioService.registro(this.usuarioRegistro).subscribe(
      (response: any) => {
        let usuario = response.usuario;
        this.usuarioRegistro = usuario;

        if (!this.usuarioRegistro._id) {
          alert("Error al registrarse");
        } else {
          alert(`Registro exitoso! Inicia sesión con ${this.usuarioRegistro.correo}`);
          this.usuarioRegistro = new Usuario('', '', '','', '', '', 'usuario', '');
          this._router.navigate(['/loginUsuario']);
        }
      },
      (error) => {
        var errorMensaje = <any>error;

        if (errorMensaje != null) {
          console.log(error);
        }
      }
    );
  }

 getUsers() {
   this.usuarioService.obtenerTareas().subscribe((response: any) => {
    
  })
 }
} */
 