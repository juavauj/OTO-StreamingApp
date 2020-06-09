import { Component, OnInit } from '@angular/core';

import { gsap, ScrollTrigger, Draggable, MotionPathPlugin } from "gsap/all";

declare var ScrollMagic: any;

gsap.registerPlugin(ScrollTrigger, Draggable, MotionPathPlugin);



//  ----- GSAP Animations -----

// Scroll Horizontal

function horizontalScroll() {
  let container = document.getElementById("container");

  gsap.to(container, {
    x: () => -(container.scrollWidth - document.documentElement.clientWidth) + "px",
    ease: "none",
    scrollTrigger: {
      trigger: container,
      invalidateOnRefresh: true,
      pin: true,
      scrub: 1,
      end: () => "+=" + container.offsetWidth
    }
  });
}

// ScrollMagic



// Animacion Inicio
function logoInicio() {
  gsap.from("#logo1", {
    opacity: 0,
    y: 200,
    duration: 1.5,
    delay: 0.5,
    ease: " back.out(1.7)"
  })

  gsap.from("#logo2", {
    opacity: 0,
    duration: 1.5,
    delay: 2,
    ease: " back.out(1.7)"
  })

  gsap.from("#logo3", {
    opacity: 0,
    duration: 1.5,
    delay: 3,
    ease: " back.out(1.7)"
  })

  gsap.from("#logoName", {
    opacity: 0,
    y: -100,
    duration: 1,
    delay: 4,
    ease: "sine.out"
  })

  gsap.to(".overlay", 1.5, {
    top: "-100%",
    delay: 5,
    ease: "sine.inOut"
  })
}

// Animaciones Slide 1

function slide1() {
  gsap.from(".imgUno", {
    opacity: 0,
    duration: 1,
    delay: 6,
    ease: "sine.out"
  })

  gsap.from(".textoUno", {
    opacity: 0,
    duration: 1,
    delay: 7,
    ease: "sine.out"
  })
}

// Animacion Slide 2

function slide2() {
  // let container = document.getElementById("container");
  gsap.from(".textoDos", {
    opacity: 0, duration: 2, scrollTrigger: {
      trigger: ".textoDos",
      // markers: true,
      start: "200",
      end: "+=500",
      // horizontal: true
    }
  })
}

// Animacion Slide 3

function slide3() {
  gsap.from(".textoTres", {
    opacity: 0, duration: 2, scrollTrigger: {
      trigger: ".textoTres",
      // markers: true,
      start: "850",
      end: "+=500",
      // horizontal: true
    }
  })
}

// Animacion Slide 4

function slide4() {
  gsap.from("#logoFoot, #pruebaBoton", {
    opacity: 0, duration: 2, scrollTrigger: {
      trigger: "#logoFoot",
      // markers: true,
      start: "1700",
      end: "+=500",
      // horizontal: true
    }
  })
}

// Timeline

function timeline() {
  let tl = gsap.timeline(); //create the timeline

  tl.from(".uno", { x: 100 }) //start sequencing
    .to(".dos", { y: 100, ease: "elastic" })
    .to(".tres", { rotation: 180 });
}


@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})

export class LandingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    horizontalScroll();

    logoInicio();

    // timeline();

    slide1();

    slide2();

    slide3();

    slide4();
    // gsap.to(".uno", { color: "#8c0", duration: 2 })
  }

}
