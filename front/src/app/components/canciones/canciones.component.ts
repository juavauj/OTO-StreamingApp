import { Component, OnInit } from '@angular/core';

//importar modelos
import { Cancion } from "../../modelo/cancion";

//importar servicios
import { CancionService } from "../../services/cancion.service";


@Component({
  selector: 'app-canciones',
  templateUrl: './canciones.component.html',
  styleUrls: ['./canciones.component.scss']
})
export class CancionesComponent implements OnInit {

  public url  : String;
  
  public cancionesEncontradas : any = [];

  public cancionEncontrada : any;

  public filterPost = '';

  public song;

  constructor(private CancionService: CancionService) {
    this.url = CancionService.url;
   }

  ngOnInit(): void {
    this.mostrarCanciones();
  }

   mostrarCanciones(){
    this.CancionService.obtenerCanciones().subscribe(
      (response : any)=>{
        this.cancionesEncontradas = response.cancion;
      },
      (error)=>{
        var errorMensaje = <any>error;
        if (errorMensaje != null){
          console.log(error);
        }
      }
    )
  }

  playCancion(_id){
    this.CancionService.ObtenerTrack(_id).subscribe(
      (response : any)=>{
        this.cancionEncontrada = response.cancion;

        let rutaAudio = this.url + 'play-cancion/' + this.cancionEncontrada.archivoAudio;
          this.song = new Audio(rutaAudio);
          this.song.play()
        
      },
      (error)=>{
        var errorMensaje = <any>error;
        if (errorMensaje != null){
          console.log(error);
        }
      }
    )
  }
  pauseSong(){
    this.song.pause();
  }
}

