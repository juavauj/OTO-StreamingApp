import { Component, OnInit } from '@angular/core';

import { AlbumService } from '../../services/album.service';
/* import { AlbumService } from 'src/app/services/album.service'; */

@Component({
  selector: 'app-albumes-admin',
  templateUrl: './albumes-admin.component.html',
  styleUrls: ['./albumes-admin.component.scss']
})
export class AlbumesAdminComponent implements OnInit {

  public albumes;

  constructor(
    private albumService:AlbumService
  ) { }
  filterPost = '';


  ngOnInit(): void {
    this.getAlbumes();
  }

  getAlbumes() {
    // Consumir servicio para obtencion de todos los artistas
    this.albumService.obteneralbumes().subscribe(
      (response: any) => {
        this.albumes = response.album;
        console.log(this.albumes);
        if (!this.albumes) {
          console.log('No hay albumes en bdd');
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
}

