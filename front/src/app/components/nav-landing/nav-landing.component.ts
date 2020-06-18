import { Component, OnInit } from '@angular/core';
import { NavSwitchService } from '../../services/nav-switch.service';
// Importar el servicio
import { UsuarioService } from '../../services/usuario.service';

// Importar Animaciones GSAP
import { gsap, ScrollTrigger, Draggable, MotionPathPlugin } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, Draggable, MotionPathPlugin);

// Importar el manejador de rutas
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-nav-landing',
  templateUrl: './nav-landing.component.html',
  styleUrls: ['./nav-landing.component.scss']
})
export class NavLandingComponent implements OnInit {
  public isLoggedIn;
  public rol;

  constructor(private usuarioService: UsuarioService, private _router: Router, private navSwitchService: NavSwitchService) { }

  ngOnInit(): void {

    let log = JSON.parse(localStorage.getItem('logged'));
    this.isLoggedIn = log.logged;
    console.log('log nav', log.logged);
    this.checkRol();
    this.gsapAnimatios();
  }

  switchNav(status: String) {
    this.navSwitchService.switchNav(status);
  }

  logOut() {
    this.usuarioService.cerrarSesion();
    this._router.navigate(['']);
    location.reload();

  }

  checkRol() {
    if (localStorage.getItem('sesion') != null) {
      this.rol = this.usuarioService.getRol();
      console.log('rol nav', this.rol);

    }


  }

  burgerClic() {
    const header = document.querySelector('header');
    const burgMenu = document.querySelector('.burger-menu')
    header.classList.toggle('active');
    burgMenu.classList.toggle('active');


  }

  /*
    --------------------------------------------------- GSAP Animations ---------------------------------------------------------------
    -----------------------------------------------------------------------------------------------------------------------------------  
  */

  gsapAnimatios() {

    // Mostrar el navBar luego de las animaciones iniciales

    (function hideNavBar() {
      gsap.from("header", {
        opacity: 0,
        y: -80,
        duration: 2,
        delay: 6,
        ease: "sine.out"
      })
    })();

  };


}
