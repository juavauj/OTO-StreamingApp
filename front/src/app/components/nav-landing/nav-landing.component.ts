import { Component, OnInit } from '@angular/core';
import { NavSwitchService } from '../../services/nav-switch.service';

@Component({
  selector: 'app-nav-landing',
  templateUrl: './nav-landing.component.html',
  styleUrls: ['./nav-landing.component.scss']
})
export class NavLandingComponent implements OnInit {

  constructor(private navSwitchService : NavSwitchService) { }

  ngOnInit(): void {
  }

  switchNav(status:Number){
    this.navSwitchService.switchNav(status);
  }

}
