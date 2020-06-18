import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";
import { observable } from "rxjs";

@Injectable()

export class AlbumService {

  url = 'http://localhost:3000/api/'

  constructor(
    private _http : HttpClient
  ) { }

  agregarAlbum(albumNuevo){
    let params = JSON.stringify(albumNuevo);
    let options = {
      headers: new HttpHeaders({'content-type':'application/json'})
      }

    return this._http.post(
      this.url + 'registrar-album',
      params,
      options
    ).pipe(map(res => res))
  }

  editarAlbum(id, albumActualizado){
    let params = JSON.stringify(albumActualizado);
    let options = {
      headers: new HttpHeaders({'content-type':'application/json'})
    }

    return this._http.put(
      this.url + 'actualizar-album/' + id,
      params,
      options
    ).pipe(map(res => res))
  }

  eliminarAlbum(id){
    let options = {
      headers: new HttpHeaders({'content-type' : 'application/json'})
    }
    return this._http.delete(
      this.url + 'borrar-album/' + id,
      options
    ).pipe(map(res => res));
  }

  obteneralbumes(){
    return this._http.get(
      this.url + 'albumes'
    ).pipe(map(res => res));
  }

  ObtenerAlbum(id){
    let options = {
      headers: new HttpHeaders({'content-type' : 'application/json'})
    }

    return this._http.get(
      this.url + 'album/' + id,
      options
    ).pipe(map(res => res))
  }

  cargarImgAlbum(file:File, id){
    //instanciar el objeto formdata
    let formData = new FormData();

    formData.append('imagen', file);

    return this._http.put(
      this.url + 'subir-img-album/' + id,
      formData
      ).pipe(map(res => res))
  }
}
