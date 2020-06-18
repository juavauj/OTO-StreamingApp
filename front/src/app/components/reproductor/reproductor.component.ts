import { Component, OnInit } from '@angular/core';
/* import {  } from "module"; */
import { ControlReproService } from '../../services/control-repro.service';
import { Cancion } from '../../modelo/cancion'

@Component({
  selector: 'app-reproductor',
  templateUrl: './reproductor.component.html',
  styleUrls: ['./reproductor.component.scss']
})
export class ReproductorComponent implements OnInit {
  trackStatus:String='false';
  cancion:Cancion;

  constructor(private controlReproService: ControlReproService) {
    this.cancion = new Cancion('', '', '', '', 0 , '', '');
   }

  ngOnInit(): void {
    this.setTrackStatus();
  }

  setTrackStatus(){
    this.controlReproService.trackStatusObservable.subscribe(status=>{
      this.trackStatus=status;
      this.cancion=JSON.parse(localStorage.getItem('cancionParams'));
      console.log('desde repro',status)
      console.log('canci repro', this.cancion)
    })
  }
  stop(){
    let audio = <HTMLAudioElement>document.getElementById(`${JSON.parse(localStorage.getItem('cancionParams'))._id}`); 
    console.log(audio)
    audio.pause(); 
    this.trackStatus='false'
  }
  play(){
    let audio = <HTMLAudioElement>document.getElementById(`${JSON.parse(localStorage.getItem('cancionParams'))._id}`); 
    console.log(audio)
    audio.play(); 
    this.trackStatus='true'
  }

}
