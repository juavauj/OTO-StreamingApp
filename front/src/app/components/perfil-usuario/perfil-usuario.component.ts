import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../modelo/usuario';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.component.html',
  styleUrls: ['./perfil-usuario.component.scss']
})
export class PerfilUsuarioComponent implements OnInit {

  // Declarar la variable usuarioActualizar
  public usuarioActualizar : Usuario;
  // Declarar la variable archivoSubir de tipo file
  public archivoSubir : File;
  // Declarar la variable identidad
  public identidad;
  // Declarar la variable url
  public url : String;

  constructor(private usuarioService : UsuarioService) { 
    this.url = usuarioService.url;
  }

  ngOnInit(): void {
    this.usuarioActualizar = JSON.parse(localStorage.getItem('sesion'));
    this.identidad=this.usuarioService.obtenerNombreUsuario();
  }

  // Declarar los metodos
  // Metodo subirArchivo
  subirArchivo(fileInput : any){
    this.archivoSubir = <File>fileInput.target.files[0];
  }
  // ------------------------------------
  // Metodo actualizarUsuario
  actualizarUsuario(){
    this.usuarioService.editarUsuario(this.usuarioActualizar._id,this.usuarioActualizar).subscribe(
      (response : any)=>{
        if(response.usuario){
          alert('Tus datos han sido actualizados correctamente');
          localStorage.setItem( 'sesion' , JSON.stringify(this.usuarioActualizar));

          // Validacion de la imagen
          if(!this.archivoSubir){
            alert('No hay ninguna imagen');
          }else{
            alert(`Tu imagen es ${this.archivoSubir.name}`);
            this.usuarioService.cargarImagenUsuario(this.archivoSubir,this.usuarioActualizar._id).subscribe(
              (result : any)=>{
                this.usuarioActualizar.imagen = result.imagen;
                localStorage.setItem('sesion', JSON.stringify(this.usuarioActualizar));
                // Mostrar la imagen
                let rutaImagen = this.url+'obtenerImagen/'+this.usuarioActualizar.imagen;
                //document.getElementById('mostrarImagen').setAttribute('src',rutaImagen);
                document.getElementById('imgUsuario').setAttribute('src', rutaImagen);
                // Cierre mostrar Imagen


              }

            );
          }


        } else {
          alert('No fue posible actualizar sus datos');
        }


      }, error =>{
        if(error!= null){
          console.log(error);
        }
      }
    );
    

  }

}
