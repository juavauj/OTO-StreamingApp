import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service'
import { Usuario } from '../../modelo/usuario';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { NavSwitchService } from '../../services/nav-switch.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-usuarios-admin',
  templateUrl: './usuarios-admin.component.html',
  styleUrls: ['./usuarios-admin.component.scss']
})

export class UsuariosAdminComponent implements OnInit {

  public usuarioRegistro: Usuario;
  selectedUser: Usuario;
  usuarios: [];

  constructor( 
    private usuarioService: UsuarioService,
    private _router: Router,
    private http: HttpClient
   ) {
    this.usuarioRegistro = new Usuario('', '', '', '','', '', '', '', '', '');
    }


  filterPost = '';

  ngOnInit(): void {
    this.usuarioService.obtenerTareas().subscribe((response:any)=>{
      this.usuarios = response
    })
  }

  delete(usuario){
    this.usuarioService.eliminarUsuario(usuario._id).subscribe((response:any)=>{
      console.log(response);
      this.usuarioService.obtenerTareas().subscribe((res:any)=>{
        this.usuarios = res
      })
    })
  }

  mutearUsuario(usuario){
    if (usuario.estado === 'activo') {
      usuario.estado = 'inactivo';
    } else if (usuario.estado === 'inactivo') {
      usuario.estado = 'activo'
    }
    
     this.usuarioService.editarusuario(usuario._id, usuario).subscribe(
      (response : any)=>{
        let actualizado = response.usuario;

        if(!actualizado){
         alert(`no hemos podido acializar el usuario (${usuario.nombre})`);
        } else {
          this.usuarioService.obtenerTareas().subscribe((res:any)=>{
            this.usuarios = res;
            alert(`(${actualizado.nombre}) El estado ha cambiado`);
          });
        }
      },
      (error) =>{
        var errorMensaje = <any>error;
        if(errorMensaje != null){
          console.log(error);
        }
      }
    ); 
  } 
 



  registrarUsuario() {
    console.log(this.usuarioRegistro);
     this.usuarioService.registroAdmin(this.usuarioRegistro).subscribe(
      (response: any) => {
        let usuario = response.usuario;
        this.usuarioRegistro = usuario;
        console.log(usuario);

        if (!this.usuarioRegistro._id) {
          alert("Error al registrarse");
        } else {
          alert(`EL nuevo usuario ${this.usuarioRegistro.correo} ha sido creado`);
          this.usuarioRegistro = new Usuario('', '', '','', '', '', '', '', '', '');
          this.usuarioService.obtenerTareas().subscribe((res:any)=>{
            this.usuarios = res;
          });
        }
      },
      (error) => {
        var errorMensaje = <any>error;

        if (errorMensaje != null) {
          console.log(error);
        }
      }
    );
    console.log(this.usuarioRegistro) 
  }

  
}
