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
  iniciarSesion(usuarioLogueado) {
    let params = JSON.stringify(usuarioLogueado);
    console.log('api params',params)
    let options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }
    return this._http.post(
      this.url + 'login',
      params,
      options
    ).pipe(map(res => res));
  }

  //----------------------------------------------------------
  // Declarar el metodo del servicio cerrarSesion
  cerrarSesion(){
    localStorage.removeItem('sesion');
    localStorage.setItem('logged',JSON.stringify({logged:false}));
  }


  //----------------------------------------------------------
  // Declarar el método del servicio obtenerNombreUsuario
  obtenerNombreUsuario() {
    /* 
      En una variable llamada identidad recogeremos los datos de nuestros usuarios una vez que haya iniciado sesion.
      Estos datos se encuentran en el local storage.
    */
    let usuarioAutorizado = JSON.parse(localStorage.getItem('sesion'));

    // Validar si localStorage esta vacio
    if (usuarioAutorizado != 'undefined') {
      this.identidad = usuarioAutorizado;

    //Metodo para optener datos de usuarios
    } else {
      this.identidad = null;
    }
      return this.identidad;
  

  }
   //----------------------------------------------------------
   // Declarar el método del servicio isLogged
  isLogged(){
    
        return JSON.parse(localStorage.getItem('logged')).logged;
  }
  //----------------------------------------------------------

   // Declarar el método del servicio isLogged
   getRol(){
    
    return JSON.parse(localStorage.getItem('sesion')).rol;
  }
//----------------------------------------------------------


  obtenerTareas (){
    return this._http.get(
      this.url + `optenerUsuarios`
    ).pipe(map(res=> res));
  
  }

  //----------------------------------------------------------
  // Declarar el método del servicio editarUsuario
  editarusuario(id, usuarioActualizado) {
    
    let params = JSON.stringify(usuarioActualizado);
    console.log(`id ${id} user ${params}`)
    let options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }
    return this._http.put(
      this.url + 'actualizar-usuario/' + id,
      params,
      options
    ).pipe(map(res => res));
  }

  //----------------------------------------------------------
  // Declarar el método del servicio cargarImagenUsuario
  cargarImagenUsuario(file: File, id) {
    // Instanciamos el objeto FormData que nos permitirá enviar la img
    let formData = new FormData();
    formData.append('imagen', file);
    return this._http.put(
      this.url + 'subirImagenUsuario/' + id,
      formData
    ).pipe(map(res => res));
  }
}



