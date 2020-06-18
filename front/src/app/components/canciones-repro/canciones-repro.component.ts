import { Component, OnInit } from '@angular/core';

import { Cancion } from '../../modelo/cancion';


import { CancionService } from '../../services/cancion.service';
import {ControlReproService } from '../../services/control-repro.service'


@Component({
  selector: 'app-canciones-repro',
  templateUrl: './canciones-repro.component.html',
  styleUrls: ['./canciones-repro.component.scss']
})
export class CancionesReproComponent implements OnInit {
  public canciones:Cancion[]
  public filterPost = '';

  constructor(private cancionesService: CancionService, private controlReproService: ControlReproService) {
   }

  ngOnInit(): void {
    this.obtenerCanciones();
  }

  obtenerCanciones(){
		this.cancionesService.obtenerCancionesActivas().subscribe(
			(response: any)=>{
				this.canciones=response;
				console.log(this.canciones)
				if(!this.canciones){
					console.log('No hay canciones en la BD');
				}
  
			},
			(error) =>{
				let errorMsg = <any>error;
				if(errorMsg != null){
					console.log(errorMsg);
				}
			}
		);
  }
  
  listenSong(cancion){
   
    let audio = <HTMLAudioElement>document.getElementById(`${cancion._id}`); 
    console.log(audio)
    audio.play(); 
    console.log(cancion)
    localStorage.setItem('cancionParams', JSON.stringify(cancion));
    this.controlReproService.sendTrackStatus('true')
  }


}
