import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";
import { observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {

  url = 'http://localhost:3000/api/'

  constructor(
    private _http : HttpClient
  ) { }

  agregarPlaylist(playlistNuevo){
    let params = JSON.stringify(playlistNuevo);
    let options = {
      headers: new HttpHeaders({'content-type':'application/json'})
      }

    return this._http.post(
      this.url + 'agregar-playlist',
      params,
      options
    ).pipe(map(res => res))
  }

  editarPlaylist(id, playlistActualizado){
    let params = JSON.stringify(playlistActualizado);
    let options = {
      headers: new HttpHeaders({'content-type':'application/json'})
    }

    return this._http.put(
      this.url + 'actualizar-playlist/' + id,
      params,
      options
    ).pipe(map(res => res))
  }

  eliminarPlaylist(id){
    let options = {
      headers: new HttpHeaders({'content-type' : 'application/json'})
    }
    return this._http.delete(
      this.url + 'borrar-playlist/' + id,
      options
    ).pipe(map(res => res));
  }

  obtenerPlaylists(){
    return this._http.get(
      this.url + 'playlists'
    ).pipe(map(res => res));
  }

  ObtenerPlaylist(id){
    let options = {
      headers: new HttpHeaders({'content-type' : 'application/json'})
    }

    return this._http.get(
      this.url + 'mostrar-playlist/' + id,
      options
    ).pipe(map(res => res))
  }
}
