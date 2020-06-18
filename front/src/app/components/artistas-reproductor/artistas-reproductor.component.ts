import { Component, OnInit } from '@angular/core';

import { Artista } from '../../modelo/artista';

import { ArtistaService } from '../../services/artista.service';

@Component({
  selector: 'app-artistas-reproductor',
  templateUrl: './artistas-reproductor.component.html',
  styleUrls: ['./artistas-reproductor.component.scss']
})
export class ArtistasReproductorComponent implements OnInit {

  public artistaDetails: Artista;
  public artistas: Artista[];
  public ruta: String;
  public showArtistaDetails = false;
  public artistaParams = { details: false, album: new Artista('', '', '', '', '') };
  public filterPost = '';

  constructor(private artistaService : ArtistaService) { 
    this.ruta=this.artistaService.url;
    this.artistaDetails=new Artista('', '', '', '', '');
  }

  ngOnInit(): void {
    localStorage.setItem('artistaParams', JSON.stringify(this.artistaParams));
    //this.showAlbumDetails = JSON.parse(localStorage.getItem('albumParams')).details;
    this.obtenerArtistasActivos();
    console.log(this.artistaDetails.nombre)
  }

  obtenerArtistasActivos() {
    
    this.artistaService.getArtistasActivos().subscribe(
      (response: any) => {
        this.artistas = response;
        if (!this.artistas) {
          console.log('No hay artistas en la BD');

        }

      },
      (error) => {
        let errorMsg = <any>error;
        if (errorMsg != null) {
          console.log(errorMsg);

        }
      }
    );
  }

  artistaDetalles(album: Artista) {
    this.artistaDetails = album;
    this.artistaParams.details = true;
    this.showArtistaDetails = true;
    this.artistaParams.album = album;
    localStorage.setItem('albumParams', JSON.stringify(this.artistaParams));
    console.log(this.artistaDetails)
  }
  listArtistas() {
    this.artistaParams.details = false;
    this.showArtistaDetails = false;
    localStorage.setItem('albumParams', JSON.stringify(this.artistaParams));

  }

}
