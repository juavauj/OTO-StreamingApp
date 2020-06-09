import { Component, OnInit } from '@angular/core';
import { NavSwitchService } from './services/nav-switch.service'
import { Location } from '@angular/common';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'front';
  navStatus:Number;

  constructor(
    private navSwitchService : NavSwitchService,
    private location: Location
    
    ){}

  ngOnInit(){
    this.navSwitching();
    

  }

  navSwitching(){
    // Suscribirse al servicio de navSwitch
    this.navSwitchService.navStatusObservable.subscribe(status =>{
      console.log("status",status)
     this.navStatus=status
   }); 

   // Revisar la direccion a la que se ingresa y mostrar el nav correspondiente
   this.navSwitchService.switchNav(this.location.path());

  }
 


}
