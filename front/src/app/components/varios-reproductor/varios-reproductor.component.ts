import { Component, OnInit } from '@angular/core';

import { Cancion } from '../../modelo/cancion';
import { Album } from '../../modelo/album';
import { Artista } from '../../modelo/artista';

import { CancionService } from '../../services/cancion.service';
import { AlbumesService } from '../../services/albumes.service';
import { ArtistaService } from '../../services/artista.service';

@Component({
  selector: 'app-varios-reproductor',
  templateUrl: './varios-reproductor.component.html',
  styleUrls: ['./varios-reproductor.component.scss']
})
export class VariosReproductorComponent implements OnInit {
  public cancionesHome = ['5ee7eb880d63d25b4b25c68b','5ee7eb940d63d25b4b25c6cd','5ee7eb970d63d25b4b25c6d8'];
  public albumesHome = ['5ee7eb830d63d25b4b25c675','5ee7eb840d63d25b4b25c679','5ee7eb870d63d25b4b25c687'];
  public artistasHome = ['5ee7eb6d0d63d25b4b25c65f','5ee7eb780d63d25b4b25c66a','5ee7eb7d0d63d25b4b25c670'];

  public canciones: Cancion[];
  public albumes: Album[];
  public artistas: Artista[];

  public filterPost = '';
  public ruta:String;

  constructor(private cancionService: CancionService, private artistaService:ArtistaService, private albumesService: AlbumesService) { 
    this.ruta = albumesService.url;

    this.canciones=[];
    this.albumes=[];
    this.artistas=[]
  }

  ngOnInit(): void {
    this.getContentHome();
  }
  getContentHome(){
    //this.getCancionesHome();
    this.getArtistasHome();
    this.getAlbumesHome();

  }
  /* getCancionesHome(){
    this.cancionesHome.forEach(id=>{
      this.cancionService.ObtenerTrack(id).subscribe(
        (response: any)=>{
          this.canciones.push(response.cancion)
          console.log('Canciones',this.canciones);
          if(!this.canciones){
            console.log('No hay canciones en la BD')
          }

        },
        (error)=>{
          let errorMsg = <any>error;
          if(errorMsg != null){
            console.log(errorMsg);
  
           }
        }
      );
      
    })

  } */

  getArtistasHome(){
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
  getAlbumesHome(){
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

}
