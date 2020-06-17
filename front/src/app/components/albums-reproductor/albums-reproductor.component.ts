import { Component, OnInit } from '@angular/core';

import { AlbumesService } from '../../services/albumes.service';

import { Album } from '../../modelo/album'

@Component({
  selector: 'app-albums-reproductor',
  templateUrl: './albums-reproductor.component.html',
  styleUrls: ['./albums-reproductor.component.scss']
})
export class AlbumsReproductorComponent implements OnInit {
  public albumes: Album[];
  public ruta:String

  constructor(private albumesService : AlbumesService) { 
    this.ruta = albumesService.url;

  }

  ngOnInit(): void {
    this.obtenerAlbumesActivos();
  }

  obtenerAlbumesActivos(){
    this.albumesService.getAlbumesActivos().subscribe(
      (response: any)=>{
        this.albumes=response;
        console.log(this.albumes);

      },
      (error)=>{
        let errorMsg = <any>error;
			  if(errorMsg != null){
				  console.log(errorMsg);

         }
    }
    );
  }

}
