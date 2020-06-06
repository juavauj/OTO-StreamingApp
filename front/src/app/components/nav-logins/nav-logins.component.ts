import { Component, OnInit } from '@angular/core';
import { NavSwitchService } from '../../services/nav-switch.service';

@Component({
  selector: 'app-nav-logins',
  templateUrl: './nav-logins.component.html',
  styleUrls: ['./nav-logins.component.scss']
})
export class NavLoginsComponent implements OnInit {

  constructor(private navSwitchService : NavSwitchService) { }

  ngOnInit(): void {
  }

  switchNav(status:Number){
    this.navSwitchService.switchNav(status);
  }

}
