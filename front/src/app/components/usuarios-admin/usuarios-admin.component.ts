import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service'
@Component({
  selector: 'app-usuarios-admin',
  templateUrl: './usuarios-admin.component.html',
  styleUrls: ['./usuarios-admin.component.scss']
})
export class UsuariosAdminComponent implements OnInit {

  constructor( 
    private usuarioServicio: UsuarioService
   ) { }
  filterPost = '';


  posts;

  ngOnInit(): void {
    this.usuarioServicio.obtenerTareas().subscribe((response:any)=>{
      this.posts = response
    })
  }

  delete(post){
    this.usuarioServicio.eliminarUsuario(post._id).subscribe((response:any)=>{
      console.log(response);
      this.usuarioServicio.obtenerTareas().subscribe((res:any)=>{
        this.posts = res
      })
    })
  }
}
