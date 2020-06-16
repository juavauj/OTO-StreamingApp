import { Component, OnInit } from '@angular/core';

import { gsap, ScrollTrigger, Draggable, MotionPathPlugin } from "gsap/all";

import inView from 'in-view';

declare var ScrollMagic: any;

gsap.registerPlugin(ScrollTrigger, Draggable, MotionPathPlugin);



@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})

export class LandingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.gsapAnimations();
  }


  /*
    --------------------------------------------------- GSAP Animations ---------------------------------------------------------------
    -----------------------------------------------------------------------------------------------------------------------------------  
  */

  gsapAnimations() {

    // var $target = $('.wrapper');

    // inView('.section').on('enter', function (el) {
    //   var color = $(el).attr('data-background-color');
    //   $target.css('background-color', color);
    // });

    // Cuando se actualiza vuelve a la posición inicial de la página
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    };

    // Funciones para desactivar y activar el scroll en la página
    function disableScrolling() {
      var x = window.scrollX;
      var y = window.scrollY;
      window.onscroll = function () { window.scrollTo(x, y); };
    };

    function enableScrolling() {
      window.onscroll = function () { };
    };


    // Condición para responsive en la página
    if (window.matchMedia("(min-width: 650px)").matches) {

      // Scroll Horizontal

      (function horizontalScroll() {
        let container = document.getElementById("container");

        let sections = gsap.utils.toArray(".slide");

        gsap.to(container, {
          x: () => -(container.scrollWidth - document.documentElement.clientWidth) + "px",
          ease: "none",
          scrollTrigger: {
            trigger: container,
            invalidateOnRefresh: true,
            pin: true,
            scrub: 1,
            snap: 1 / (sections.length - 1),
            end: () => "+=" + container.offsetWidth
          }
        });
      })();


      // Animacion Inicio
      (function logoInicio() {

        gsap.from(".logo1", {
          opacity: 0,
          duration: 2,
          delay: 3,
          ease: " back.out(1.7)"
        })

        gsap.from(".logo2", {
          opacity: 0,
          duration: 1.5,
          delay: 2,
          ease: " back.out(1.7)"
        })

        gsap.from(".logo3", {
          opacity: 0,
          duration: 1.5,
          y: 200,
          ease: " back.out(1.7)",
          onStart: disableScrolling
        })

        gsap.from(".logoName", {
          opacity: 0,
          y: -80,
          duration: 0.8,
          delay: 4,
          ease: "sine.out"
        })

        gsap.to(".overlay", 1.5, {
          top: "-100%",
          delay: 5,
          ease: "sine.inOut",
          onComplete: enableScrolling
        })
      })();

      // Animaciones Slide 1

      (function slide1() {
        gsap.from(".imgUno", {
          opacity: 0,
          x: -50,
          duration: 1,
          delay: 6,
          ease: "sine.out"
        })

        gsap.from(".tituloUno", {
          opacity: 0,
          y: 70,
          duration: 1,
          delay: 7,
          ease: "sine.out"
        })

        gsap.from(".parrafoUno", {
          opacity: 0,

          y: 70,
          duration: 1,
          delay: 7.5,
          ease: "sine.out"
        })
      })();

      // Animacion Slide 2

      (function slide2() {

        gsap.from(".tituloDos", {
          opacity: 0,
          duration: 1,
          ease: "sine.out",
          y: 70,
          scrollTrigger: {
            trigger: ".textoDos",
            // markers: true,
            start: "150",
            end: "+=500"
          }
        })

        gsap.from("#parrafoDos", {
          opacity: 0,
          duration: 1,
          ease: "sine.out",
          y: 70,
          delay: 0.5,
          scrollTrigger: {
            trigger: ".textoDos",
            // markers: true,
            start: "150",
            end: "+=500"
          }
        })

        gsap.from(".album1", {
          opacity: 0,
          duration: 2,
          x: 500,
          scrollTrigger: {
            trigger: ".imgDos",
            // markers: true,
            start: "450",
            end: "+=500"

          }
        })
        gsap.from(".album2", {
          opacity: 0,
          duration: 2,
          x: 500,
          delay: 0.2,
          scrollTrigger: {
            trigger: ".imgDos",
            // markers: true,
            start: "450",
            end: "+=500"

          }
        })
        gsap.from(".album3", {
          opacity: 0,
          duration: 2,
          x: 500,
          delay: 0.6,
          scrollTrigger: {
            trigger: ".imgDos",
            // markers: true,
            start: "450",
            end: "+=500"

          }
        })
        gsap.from(".album4", {
          opacity: 0,
          duration: 2,
          x: 500,
          delay: 1.4,
          scrollTrigger: {
            trigger: ".imgDos",
            // markers: true,
            start: "450",
            end: "+=500"
          }
        })
        gsap.from(".album5", {
          opacity: 0,
          duration: 2,
          x: 500,
          delay: 1,
          scrollTrigger: {
            trigger: ".imgDos",
            // markers: true,
            start: "450",
            end: "+=500"

          }
        })
      })();

      // Animacion Slide 3

      (function slide3() {
        gsap.from(".video", {
          opacity: 0,
          duration: 2,
          x: -300,
          scrollTrigger: {
            trigger: ".textoTres",
            // markers: true,
            start: "750",
            end: "+=500"

          }
        })

        gsap.from("#tituloTres", {
          opacity: 0,
          duration: 2,
          y: 70,
          scrollTrigger: {
            trigger: ".textoTres",
            // markers: true,
            start: "900",
            end: "+=500"

          }
        })

        gsap.from(".parrafoTres", {
          opacity: 0,
          duration: 2,
          y: 70,
          delay: 0.5,
          scrollTrigger: {
            trigger: ".textoTres",
            // markers: true,
            start: "900",
            end: "+=500"

          }
        })
      })();

      // Animacion Slide 4

      (function slide4() {

        // gsap.to(".cuatro", {
        //   opacity: 0,
        //   duration: 1,
        //   css: { background: "linear-gradient(to top, #30cfd0, #00a4ca, #0076bc, #00469c, #330867)" },
        //   scrollTrigger: {
        //     trigger: ".logoFoot",
        //     // markers: true,
        //     start: "1700",
        //     end: "+=500",
        //   
        //   }
        // });

        gsap.from(".logoFoot, .pruebaBotonResponsive", {
          opacity: 0,
          duration: 2,
          y: 70,
          scrollTrigger: {
            trigger: ".logoFoot",
            // markers: true,
            start: "1700",
            end: "+=500",

          }
        })
      })();

      // Animaciones para responsive celulares
    } else {

      // Scroll Vertical

      (function verticalScroll() {
        let container = document.getElementById("container");

        let sections = gsap.utils.toArray(".slide");


        gsap.to(container, {
          y: () => -(container.scrollHeight - document.documentElement.clientHeight) + "px",
          ease: "none",
          scrollTrigger: {
            trigger: container,
            invalidateOnRefresh: true,
            pin: true,
            scrub: 1,
            snap: 1 / (sections.length - 1),
            end: () => "+=" + container.offsetHeight
          }
        });
      })();

      // Animacion Inicio
      (function logoInicio() {
        gsap.from(".logo1", {
          opacity: 0,
          duration: 1.5,
          delay: 3,
          ease: " back.out(1.7)"
        })

        gsap.from(".logo2", {
          opacity: 0,
          duration: 1.5,
          delay: 2,
          ease: " back.out(1.7)"
        })

        gsap.from(".logo3", {
          opacity: 0,
          duration: 1.5,
          y: 150,
          ease: " back.out(1.7)",
          onStart: disableScrolling
        })

        gsap.from(".logoName", {
          opacity: 0,
          y: -100,
          duration: 1,
          delay: 4,
          ease: "sine.out"
        })

        gsap.to(".overlay", 1.5, {
          top: "-100%",
          delay: 5,
          ease: "sine.inOut",
          onComplete: enableScrolling
        })
      })();

      // Animaciones Slide 1

      (function slide1() {
        gsap.from(".imgUno", {
          opacity: 0,
          duration: 2.2,
          delay: 6,
          y: 70,
          ease: "sine.out"
        })

        gsap.from(".tituloUno", {
          opacity: 0,
          duration: 1,
          delay: 6,
          y: 50,
          ease: "sine.out"
        })

        gsap.from(".parrafoUno", {
          opacity: 0,
          duration: 1,
          delay: 6.5,
          y: 70,
          ease: "sine.out"
        })
      })();

      // Animacion Slide 2


      (function slide2() {

        gsap.from("#tituloDosResponsive", {
          opacity: 0,
          duration: 1,
          ease: "sine.out",
          y: 70,
          scrollTrigger: {
            trigger: ".textoDos",
            // markers: true,
            end: "+=500"
          }
        })

        gsap.from("#parrafoDos", {
          opacity: 0,
          duration: 1,
          ease: "sine.out",
          y: 70,
          delay: 0.5,
          scrollTrigger: {
            trigger: ".textoDos",
            // markers: true,
            end: "+=500"
          }
        })

        gsap.from(".album1", {
          opacity: 0,
          duration: 2,
          delay: 0.5,
          y: 90,
          scrollTrigger: {
            trigger: ".textoDos",
            // markers: true,
            end: "+=500"

          }
        })
        gsap.from(".album2", {
          opacity: 0,
          duration: 2,
          y: 70,
          delay: 0.7,
          scrollTrigger: {
            trigger: ".textoDos",
            // markers: true,
            end: "+=500"

          }
        })
        gsap.from(".album3", {
          opacity: 0,
          duration: 2,
          y: 70,
          delay: 0.9,
          scrollTrigger: {
            trigger: ".textoDos",
            // markers: true,
            end: "+=500"

          }
        })
        gsap.from(".album4", {
          opacity: 0,
          duration: 2,
          y: 70,
          delay: 1.3,
          scrollTrigger: {
            trigger: ".textoDos",
            // markers: true,
            end: "+=500"
          }
        })
        gsap.from(".album5", {
          opacity: 0,
          duration: 2,
          y: 70,
          delay: 1.1,
          scrollTrigger: {
            trigger: ".textoDos",
            // markers: true,
            end: "+=500"

          }
        })
      })();


      // Animacion Slide 3

      (function slide3() {
        gsap.from(".videoResponsive", {
          opacity: 0,
          duration: 2,
          y: 150,
          scrollTrigger: {
            trigger: ".uno",
            start: "370px",
            // markers: true,
            end: "+=500"

          }
        })

        gsap.from("#tituloTres", {
          opacity: 0,
          duration: 2,
          y: 100,
          scrollTrigger: {
            trigger: ".uno",
            start: "340px",
            end: "+=500"

          }
        })

        gsap.from("#parrafoTresResponsive", {
          opacity: 0,
          duration: 2,
          y: 100,
          delay: 0.5,
          scrollTrigger: {
            trigger: ".uno",
            start: "340px",
            end: "+=500"

          }
        })
      })();

      // Animacion Slide 4

      (function slide4() {

        // gsap.to(".cuatro", {
        //   opacity: 0,
        //   duration: 1,
        //   css: { background: "linear-gradient(to top, #30cfd0, #00a4ca, #0076bc, #00469c, #330867)" },
        //   scrollTrigger: {
        //     trigger: ".logoFoot",
        //     // markers: true,
        //     start: "1700",
        //     end: "+=500",
        //   
        //   }
        // });

        gsap.from(".logoFootResponsive, .pruebaBotonResponsive", {
          opacity: 0,
          duration: 2,
          y: 80,
          scrollTrigger: {
            trigger: ".uno",
            // markers: true,
            start: "550px",
            end: "+=500",

          }
        })
      })();

    }
  }

}
