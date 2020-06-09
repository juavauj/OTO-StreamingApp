import { Component, OnInit } from '@angular/core';
import { NavSwitchService } from '../../services/nav-switch.service';

@Component({
  selector: 'app-nav-landing',
  templateUrl: './nav-landing.component.html',
  styleUrls: ['./nav-landing.component.scss']
})
export class NavLandingComponent implements OnInit {
  public isLoggedIn;

  constructor(private navSwitchService : NavSwitchService) { }

  ngOnInit(): void {

    let log=JSON.parse(localStorage.getItem('logged'));
    this.isLoggedIn=log.logged;
    console.log(log.logged);
  }

  switchNav(status:String){
    this.navSwitchService.switchNav(status);
  }


}
