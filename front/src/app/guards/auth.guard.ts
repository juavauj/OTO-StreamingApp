import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Route, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { UsuarioService } from '../services/usuario.service';

@Injectable()

export class AuthGuard implements CanActivate {

  constructor(private usuarioService : UsuarioService, private _router : Router){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if(this.usuarioService.isLogged()){
      return true;
    }else{
      
      this._router.navigate(['/']);
      return false
    }


    
  }
  
}
