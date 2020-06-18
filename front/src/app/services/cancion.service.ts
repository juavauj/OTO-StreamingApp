  
import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Observable } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class CancionService {

  url = 'http://localhost:3000/api/';

  public cancion;

  constructor(
    private _http: HttpClient
  ) { }


  //servicio para agregar canciones
  agregarCancion(cancionNueva){
    let params = JSON.stringify(cancionNueva);
    let options = {
      headers: new HttpHeaders({'content-type':'application/json'})
      }

    return this._http.post(
      this.url + 'registrar-cancion',
      params,
      options
    ).pipe(map(res => res))
  }

 //servicio para actualizar canciones
  actualizarCanciones(id, cancionActualizada){
    let params = JSON.stringify(cancionActualizada);
    let options = {
      headers: new HttpHeaders({'content-type':'application/json'})
    }

    return this._http.put(
      this.url + 'actualizar-cancion/' + id,
      params,
      options
    ).pipe(map(res => res))
  }

  //servicio para borrar las canciones
  borrarCancion(id){
    let options = {
      headers: new HttpHeaders({'content-type' : 'application/json'})
    }
    return this._http.delete(
      this.url + 'borrar-cancion/' + id,
      options
    ).pipe(map(res => res));
  }

  obtenerNombreCancion(){
    let cancionReproducir = JSON.parse(localStorage.getItem('cancion'));

    if (cancionReproducir != 'undefined') {
      this.cancion = cancionReproducir;
    }else{
      this.cancion = null;
    } 
    return this.cancion
  }

  //servicio para traer las canciones
  obtenerCanciones(){
    return this._http.get(
      this.url + 'canciones'
    ).pipe(map(res => res));
  }

  obtenerCancionesActivas(){
    return this._http.get(
      this.url + 'canciones-estado/activo'
    ).pipe(map(res => res));
  }

  //servicio para traer una canción
  ObtenerTrack(id){
    let options = {
      headers: new HttpHeaders({'content-type' : 'application/json'})
    }

    return this._http.get(
      this.url + 'cancion/' + id,
      options
    ).pipe(map(res => res))
  }

  cancionEstado(estado){
    let options = {
      headers: new HttpHeaders({'content-type' : 'application/json'})
    }

    return this._http.get(
      this.url + 'canciones-estado/' + estado,
      options
    ).pipe(map(res => res))
  }

  cargarArchivoAudio(file:File, id){

    let formData = new FormData();

    formData.append('archivoAudio', file);

    return this._http.put(
      this.url + 'subir-audio/' + id,
      formData
    ).pipe(map(res => res));
  }  
}