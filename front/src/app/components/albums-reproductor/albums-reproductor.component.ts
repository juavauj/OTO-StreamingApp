import { Component, OnInit } from '@angular/core';

import { AlbumesService } from '../../services/albumes.service';

import { Album } from '../../modelo/album'

@Component({
  selector: 'app-albums-reproductor',
  templateUrl: './albums-reproductor.component.html',
  styleUrls: ['./albums-reproductor.component.scss']
})
export class AlbumsReproductorComponent implements OnInit {
  public albumDetails: Album;
  public albumes: Album[];
  public ruta: String;
  public showAlbumDetails = false;
  public albumParams = { details: false, album: new Album('', '', '', '', '', 0, '', '') };
  public filterPost = '';

  constructor(private albumesService: AlbumesService) {
    this.ruta = albumesService.url;
    this.albumDetails = new Album('', '', '', '', '', 0, '', '');


  }

  ngOnInit(): void {

    
    if(JSON.parse(localStorage.getItem('albumParams')) && JSON.parse(localStorage.getItem('albumParams')).details===true){
      this.showAlbumDetails = JSON.parse(localStorage.getItem('albumParams')).details;
      this.albumDetails=JSON.parse(localStorage.getItem('albumParams')).album;
    }else{
      localStorage.setItem('albumParams', JSON.stringify(this.albumParams));
    }
    
    this.obtenerAlbumesActivos();
    //console.log(this.albumDetails.nombre)
  }

  obtenerAlbumesActivos() {
    this.albumesService.getAlbumesActivos().subscribe(
      (response: any) => {
        this.albumes = response;
        if (!this.albumes) {
          console.log('No hay albumes en la BD');

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

  albumDetalles(album: Album) {
    this.albumDetails = album;
    this.albumParams.details = true;
    this.showAlbumDetails = true;
    this.albumParams.album = album;
    localStorage.setItem('albumParams', JSON.stringify(this.albumParams));
    console.log(this.albumDetails)
  }
  listAlbumes() {
    this.albumParams.details = false;
    this.showAlbumDetails = false;
    localStorage.setItem('albumParams', JSON.stringify(this.albumParams));

  }


}
