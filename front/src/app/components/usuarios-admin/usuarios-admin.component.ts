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
  posts;

  ngOnInit(): void {
    this.usuarioService.obtenerTareas().subscribe((response:any)=>{
      this.posts = response
    })
  }

  delete(post){
    this.usuarioService.eliminarUsuario(post._id).subscribe((response:any)=>{
      console.log(response);
      this.usuarioService.obtenerTareas().subscribe((res:any)=>{
        this.posts = res
      })
    })
  }

  mutearUsuario(usuario){
    if (usuario.estado === 'activo') {
      usuario.estado = 'inactivo';
    } else if (usuario.estado === 'inactivo') {
      usuario.estado = 'activo'
    }

   /*  this.usuarioService.editarusuario(usuario._id, usuario).subscribe(
      (response : any)=>{
        let actualizado = response.usuario;
        if(!actualizado){
         alert(`no hemos podido acializar el usuario (${usuario.nombre})`);
      } else {
        this.usuarioService.obtenerTareas().subscribe((res:any)=>{
          this.posts = res;
          alert(`(${actualizado.nombre}) actualizado exitosamente`);
        }
      }
      (error) =>{
        var errorMensaje = <any>error;
        if(errorMensaje != null){
          console.log(error);
        }
      }
    ); */
  }

 



  registrarUsuario() {
    this.usuarioService.registro(this.usuarioRegistro).subscribe(
      (response: any) => {
        let usuario = response.usuario;
        this.usuarioRegistro = usuario;
        console.log(usuario);

        if (!this.usuarioRegistro._id) {
          alert("Error al registrarse");
        } else {
          alert(`Registro exitoso! Inicia sesión con ${this.usuarioRegistro.correo}`);
          this.usuarioRegistro = new Usuario('', '', '','', '', '', '', '', '', '');
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
    console.log(this.usuarioRegistro)
  }

  
}
