import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LandingComponent } from './components/landing/landing.component';
import { LoginAdminComponent } from './components/login-admin/login-admin.component';
<<<<<<< HEAD
=======
import { LoginUsuarioComponent } from './components/login-usuario/login-usuario.component';
import { ReproductorComponent } from './components/reproductor/reproductor.component';
import { AdminComponent } from './components/admin/admin.component';
>>>>>>> b424da7152947df22c69a3b30fa22350c30ca6b5

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
<<<<<<< HEAD
    LoginAdminComponent
=======
    LoginAdminComponent,
    LoginUsuarioComponent,
    ReproductorComponent,
    AdminComponent
>>>>>>> b424da7152947df22c69a3b30fa22350c30ca6b5
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
