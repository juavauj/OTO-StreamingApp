import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trabaja-con-nosotros',
  templateUrl: './trabaja-con-nosotros.component.html',
  styleUrls: ['./trabaja-con-nosotros.component.scss']
})
export class TrabajaConNosotrosComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
    let audio = new Audio()
  audio.src='http://localhost:3000/api/play-cancion/5ee7eb880d63d25b4b25c688.mp3';
  console.log(audio.src)
  console.log(audio)
  /* audio.load();
  audio.play();
  audio.pause() */
  }
  playMusic(){
    var x = <HTMLAudioElement>document.getElementById("myAudio"); 
    x.play(); 
  }
  pauseMusic(){
    var x = <HTMLAudioElement>document.getElementById("myAudio"); 
    x.pause(); 
  }
}
