import { Component, OnInit } from '@angular/core';

// Importar el servicio de Artista
import { ArtistaService } from '../../services/artista.service';

// Importar modelo de artista
import { Artista } from '../../modelo/artista'

@Component({
  selector: 'app-artistas-admin',
  templateUrl: './artistas-admin.component.html',
  styleUrls: ['./artistas-admin.component.scss']
})
export class ArtistasAdminComponent implements OnInit {

  filterArtista = '';

  artistas;

  // corresponde al formulario para nuevo artista
  nuevoArtista: Artista;

  // corresponde a la imagen del nuevo artista
  nuevaImagen: File;

  constructor(private artistaService: ArtistaService) {
    this.nuevoArtista = new Artista('', '', 'activo', '', '');
  }

  ngOnInit(): void {
    this.getArtistas();
  }

  getArtistas() {
    // Consumir servicio para obtencion de todos los artistas
    this.artistaService.getArtistas().subscribe(
      (response: any) => {
        this.artistas = response.artista;
        if (!this.artistas) {
          console.log('No hay artistas en bdd');
        }
      },
      (error) => {
        let errorMensaje = <any>error;

        if (errorMensaje != null) {
          console.log(error);
        }
      }
    );

  }

  delete(artista) {
    // Consumir servicio para eliminacion de artista
    this.artistaService.deleteArtista(artista._id).subscribe(
      (response: any) => {
        let eliminado = response.artista;
        if (!eliminado) {
          alert(`No se ha podido eliminar el artista (${artista.nombre})`);
        } else {
          // actualizar la vista
          this.getArtistas();
          alert(`(${eliminado.nombre}) eliminado exitosamente`);
        }
      },
      (error) => {
        let errorMensaje = <any>error;
        if (errorMensaje != null) {
          alert(`No se ha podido eliminar el artista (${artista.nombre})`);
        }
      }
    );
  }

  updateEstado(artista) {
    // cambiar el estado del artista
    if (artista.estado === 'activo') {
      artista.estado = 'inactivo';
    } else if (artista.estado === 'inactivo') {
      artista.estado = 'activo'
    }
    // aqui se puede utilizar el mismo servicio de actualizacion de artista
    this.artistaService.actualizarArtista(artista._id, artista)
      .subscribe(
        (response: any) => {
          let actualizado = response.artista;
          if (!actualizado) {
            alert(`No se ha podido actualizar el artista (${artista.nombre})`);
          } else {
            // actualizar la vista
            this.getArtistas();
            alert(`(${actualizado.nombre}) actualizado exitosamente`);
          }
        },
        (error) => {
          let errorMensaje = <any>error;
          if (errorMensaje != null) {
            alert(`No se ha podido actualizar el artista (${artista.nombre})`);
          }
        }
      );
  }

  addArtista() {
    // tomando como referencia `registro` en el servicio `UsuarioService` del
    // ejemplo del profesor
    this.artistaService.addArtista(this.nuevoArtista)
      .subscribe(
        (response: any) => {
          this.nuevoArtista = response.artista;
          if (!this.nuevoArtista._id) {
            alert(`${this.nuevoArtista.nombre} no se ha podido registrar!`);
          } else {
            alert(`Artista ${this.nuevoArtista.nombre} registrado!`);
            // ahora se procede a cargar la imagen (de haber una)
            if (!this.nuevaImagen) {
              alert(`No has seleccionado una imagen para ${this.nuevoArtista.nombre}`);
            } else {
              alert(`La imagen seleccionada es ${this.nuevaImagen.name}`);
              // utilizar el servicio de carga de imagen
              this.artistaService.subirImg(this.nuevoArtista._id, this.nuevaImagen)
                .subscribe(
                  (result: any) => {
                    // tener en cuenta que aca no se revisan errores
                  }
                );
              // limpiar para nueva imagen
              this.nuevaImagen = undefined;
            }
            // limpiar para un nuevo artista
            this.nuevoArtista = new Artista('', '', 'activo', '', '');
            // rellenar con artistas actualizados
            this.getArtistas();
          }
        },
        error => {
          let errorMensaje = <any>error;
          if (errorMensaje != null) {
            alert(`${this.nuevoArtista.nombre} no se ha podido registrar!`);
          }
        }
      );
  }

  // se actualiza la imagen a subir cada vez que el usuario selecciona
  // una a traves del formulario de nuevo artista
  subirNuevaImg(evt: any) {
    this.nuevaImagen = <File>evt.target.files[0];
  }

}
