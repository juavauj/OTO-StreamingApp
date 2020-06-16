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
    console.log(this.nuevoArtista);
  }

}
