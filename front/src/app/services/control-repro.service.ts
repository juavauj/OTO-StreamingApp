import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class ControlReproService {
  
  constructor() { }
  trackStatus:String;
  private trackStatusSubject = new Subject<String>();
  trackStatusObservable= this.trackStatusSubject.asObservable();

  sendTrackStatus(playing:String){
    console.log('servicio', playing)
    this.trackStatus=playing;
    this.trackStatusSubject.next(this.trackStatus);
  }

}
