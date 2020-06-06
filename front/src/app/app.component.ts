import { Component, OnInit } from '@angular/core';
import { NavSwitchService } from './services/nav-switch.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'front';
  navStatus:Number=0;

  constructor(private navSwitchService : NavSwitchService){}

  ngOnInit(){

    this.navSwitchService.navStatusObservable.subscribe(status =>{
      this.navStatus=status
    });

  }


}
