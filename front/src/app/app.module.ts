import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LandingComponent } from './components/landing/landing.component';
import { LoginAdminComponent } from './components/login-admin/login-admin.component';
import { LoginUsuarioComponent } from './components/login-usuario/login-usuario.component';
import { ReproductorComponent } from './components/reproductor/reproductor.component';
import { AdminComponent } from './components/admin/admin.component';
import { NavLoginsComponent } from './components/nav-logins/nav-logins.component';
import { NavLandingComponent } from './components/nav-landing/nav-landing.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    LoginAdminComponent,
    LoginUsuarioComponent,
    ReproductorComponent,
    AdminComponent,
    NavLoginsComponent,
    NavLandingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
