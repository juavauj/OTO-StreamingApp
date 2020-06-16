import { Component, OnInit } from '@angular/core';

// Importar el modelo
import { Usuario } from '../../modelo/usuario';
// Importar el servicio
import { UsuarioService } from '../../services/usuario.service';

import { NavSwitchService } from '../../services/nav-switch.service';

// Importar el manejador de rutas
import { Router, ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.scss']
})
export class LoginAdminComponent implements OnInit {
 // Declarar la variable login de tipo Usuario
 public login : Usuario;

 // Declarar la variable identidad
 public identidad;

 constructor(private usuarioService : UsuarioService, private _router : Router, private navSwitchService : NavSwitchService) { 
   this.login = new Usuario("","","","","","","","","","");
 }

  ngOnInit(): void {
  }

    // Metodo loginUsuario que consumira el servicio iniciarSesion
    loginUsuario(){
      this.usuarioService.iniciarSesion(this.login).subscribe(
        (response : any)=>{
          let usuario = response.usuario;
          this.login = usuario;
          console.log(this.login)
          
          if(this.login){
            let usuarioLogueado = new Usuario(
              this.login._id,
              this.login.nombre,
              this.login.apellido,
              this.login.usuario,
              this.login.correo,
              this.login.contrasena,
              this.login.rol,
              this.login.imagen
            );
            // crear el objeto localStorage
            localStorage.setItem('sesion',JSON.stringify(usuarioLogueado));
            // crear el objeto de logged in en localStorage
            localStorage.setItem('logged',JSON.stringify({logged:true}));
            //Consumir el servicio obtenerNombreUsuario
            this.identidad = this.usuarioService.obtenerNombreUsuario();
            alert(`Hola ${this.identidad.nombre}`);
            // Realizar cambio de barra de navegacion 
            this.navSwitchService.switchNav('/login');
            //Redireccion al perfil
            this._router.navigate(['/perfil/vista']);
          }else{
            alert('Usuario no identificado');
          }
          // Cierrde validacion usuario logueado
        }, error =>{
          if(error != null){
            console.log(error);
          }
        }
      );
    }
  
    // Fin Metodo

}
