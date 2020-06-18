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

  /* playCancion(){
    this.CancionService.cancionEstado(estado).subscribe(
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
  } */
}

