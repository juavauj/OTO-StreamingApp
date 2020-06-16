import { Injectable } from '@angular/core';

// Importar los módulos HttpClient y HttpHeaders
import { HttpClient, HttpHeaders } from '@angular/common/http';

// Importar el map
import { map } from 'rxjs/operators';

// Importar Observable
import { Observable } from 'rxjs';

@Injectable()
export class ArtistaService {

  // Declarar la variable url de la api
  url = 'http://localhost:3000/api/';

  constructor(
    private _http: HttpClient
  ) { }

  // ----------------------------------------------------------
  // Declarar el método del servicio de obtencion de artistas
  getArtistas() {
    return this._http.get(
      this.url + 'artistas'
    ).pipe(map(res => res));
  }

  // ----------------------------------------------------------
  // Declarar el método del servicio de eliminacion de artista
  deleteArtista(id) {
    return this._http.delete(
      this.url + `borrar-artista/${id}`
    ).pipe(map(res => res));
  }

  // ----------------------------------------------------------
  // Declarar el método del servicio de actualizacion de artista
  actualizarArtista(id, artistaActualizado) {
    let params = JSON.stringify(artistaActualizado);
    let options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }
    return this._http.put(
      this.url + `actualizar-artista/${id}`,
      params,
      options
    ).pipe(map(res => res));
  }
}
