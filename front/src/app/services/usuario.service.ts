import { Injectable } from '@angular/core';

// Importar los módulos HttpClient y HttpHeaders
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable()
export class UsuarioService {

  url= 'http://localhost:3000/api/';
  
  constructor(
    private _http: HttpClient
    ) { }

    registro(usuarioNuevo){
      let params = JSON.stringify(usuarioNuevo);
      let options = {
        headers: new HttpHeaders({'Content-Type' : 'application/json'})
      };

      return this._http.post(
        this.url + `registro`,
        params,
        options
      ).pipe(map(res => res));
    }
}


