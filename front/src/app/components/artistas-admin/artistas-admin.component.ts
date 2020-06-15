import { Component, OnInit } from '@angular/core';

// Importar el servicio de Artista
import { ArtistaService } from '../../services/artista.service';

@Component({
  selector: 'app-artistas-admin',
  templateUrl: './artistas-admin.component.html',
  styleUrls: ['./artistas-admin.component.scss']
})
export class ArtistasAdminComponent implements OnInit {

  filterArtista = '';

  artistas;

  constructor(private artistaService: ArtistaService) { }

  ngOnInit(): void {
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

  delete(artista){
    // Consumir servicio para eliminacion de artista
    this.artistaService.deleteArtista(artista._id).subscribe(
      (response: any) => {
        let eliminado = response.artista;
        if (!eliminado) {
          alert(`No se ha podido eliminar el artista (${artista.nombre})`);
        } else {
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

}
