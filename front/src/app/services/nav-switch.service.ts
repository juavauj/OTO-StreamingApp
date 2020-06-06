import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class NavSwitchService {

  constructor() { }
  navStatus:Number;
  private navStatusSubject = new Subject<Number>();
  navStatusObservable= this.navStatusSubject.asObservable();


  switchNav(status:Number){
    this.navStatus=status;
    this.navStatusSubject.next(this.navStatus);
  }
}
