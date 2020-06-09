import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class NavSwitchService {

  constructor() { }
  navStatus:Number;
  private navStatusSubject = new Subject<Number>();
  navStatusObservable= this.navStatusSubject.asObservable();


  switchNav(url:String){
    switch (url) {
      case '/registro':
        this.navStatus=1;
        this.navStatusSubject.next(this.navStatus);
        break;
      case '/loginUsuario':
        this.navStatus=1;
        this.navStatusSubject.next(this.navStatus);
        break;
      
      default:
        this.navStatus=0;
        this.navStatusSubject.next(this.navStatus);
        break;
    }
    
  }
}
