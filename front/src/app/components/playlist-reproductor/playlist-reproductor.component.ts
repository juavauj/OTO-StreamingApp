import { Component, OnInit } from '@angular/core';

import { PlaylistService } from "../../services/playlist.service";

@Component({
  selector: 'app-playlist-reproductor',
  templateUrl: './playlist-reproductor.component.html',
  styleUrls: ['./playlist-reproductor.component.scss']
})
export class PlaylistReproductorComponent implements OnInit {

  public url  : String;
  
  public playlistsEncontradas : any = [];

  public playlistEncontrada : any;

  estado: boolean = true

  constructor(private PlaylistService: PlaylistService) {
    this.url = PlaylistService.url;
   }

  ngOnInit(): void {
    this.mostrarPlaylist();
  }

   mostrarPlaylist(){
    this.PlaylistService.obtenerPlaylists().subscribe(
      (response : any)=>{
        this.playlistsEncontradas = response.playlist;
      },
      (error)=>{
        var errorMensaje = <any>error;
        if (errorMensaje != null){
          console.log(error);
        }
      }
    )
  }

  cambiar(){
    this.estado = !this.estado
  }
  
}
