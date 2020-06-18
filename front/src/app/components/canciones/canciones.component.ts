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
  
  public cancionesEncontradas : any = [];

  constructor(private CancionService: CancionService) { }

  ngOnInit(): void {
    // this.mostrarCanciones();
  }

  /* mostrarCanciones(){
    this.CancionService.obtenerCanciones().subscribe(
      (Response : any)=>{
        this.cancionesEncontradas = Response.canciones;
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
