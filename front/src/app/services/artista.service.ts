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
  getUsuarios() {
    return this._http.get(
      this.url + 'artistas',
    ).pipe(map(res => res));
  }
}
