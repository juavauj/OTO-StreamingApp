import { Injectable } from '@angular/core';

// Importar los módulos HttpClient y HttpHeaders
import { HttpClient, HttpHeaders } from '@angular/common/http';

// Importar el map
import { map } from 'rxjs/operators';

// Importar Observable
import { Observable } from 'rxjs';

@Injectable()
export class UsuarioService {

  // Declarar la variable url de la api
  url = 'http://localhost:3000/api/';

  // Declarar la variable identidad
  public identidad;

  constructor(
    private _http: HttpClient
  ) { }

  // ----------------------------------------------------------
  // Declarar el método del servicio registro
  registro(usuarioNuevo) {
    let params = JSON.stringify(usuarioNuevo);
    let options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this._http.post(
      this.url + 'registro',
      params,
      options
    ).pipe(map(res => res));

  }

  //----------------------------------------------------------
  // Declarar el método del servicio iniciarSesion
  iniciarSesion(usuarioLogueado){
    let params = JSON.stringify(usuarioLogueado);
    let options = {
      headers : new HttpHeaders( { 'Content-Type' : 'application/json' } )
    }
    return this._http.post(
      this.url + 'login',
      params,
      options
    ).pipe(map(res => res));
  }
  //----------------------------------------------------------
  // Declarar el método del servicio obtenerNombreUsuario
  obtenerNombreUsuario(){
    /* 
      En una variable llamada identidad recogeremos los datos de nuestros usuarios una vez que haya iniciado sesion.
      Estos datos se encuentran en el local storage.
    */
   let usuarioAutorizado = JSON.parse(localStorage.getItem('sesion'));

   // Validar si localStorage esta vacio
   if(usuarioAutorizado != 'undefined'){
     this.identidad = usuarioAutorizado;

   }else{
     this.identidad = null;
   }
   
   return this.identidad;

  }

  //Metodo para optener datos de usuarios
  obtenerTareas (){
    return this._http.get(
      this.url + `optenerUsuarios`
    ).pipe(map(res=> res));
  }



}


