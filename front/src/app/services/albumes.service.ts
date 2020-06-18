import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Observable } from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class AlbumesService {
  url = 'http://localhost:3000/api/';

  constructor(
    private _http: HttpClient
  ) { }

  getAlbumes(){
    return this._http.get(
      this.url + 'albumes'
    ).pipe(map(res => res));

  }

  getAlbumesActivos(){
    return this._http.get(
      this.url + 'albumesEstado/activo'
    ).pipe(map(res => res));

  }

  getAlbumById(id) {
    return this._http.get(
      this.url + 'album/' + id
    ).pipe(map(res => res))
  }
  
  addAlbum(albumNuevo){

    let params = JSON.stringify(albumNuevo);
    let options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this._http.post(
      this.url + 'registrar-album',
      params,
      options
    ).pipe(map(res => res));

  }
}

