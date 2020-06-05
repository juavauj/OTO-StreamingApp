import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//Importar módulo de rutas
import { AppRoutingModule } from './app-routing.module';
// Importar Módulo Formulariios
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LandingComponent } from './components/landing/landing.component';
import { LoginAdminComponent } from './components/login-admin/login-admin.component';
import { LoginUsuarioComponent } from './components/login-usuario/login-usuario.component';
import { ReproductorComponent } from './components/reproductor/reproductor.component';
import { AdminComponent } from './components/admin/admin.component';
<<<<<<< HEAD
import { NavLoginsComponent } from './components/nav-logins/nav-logins.component';
import { NavLandingComponent } from './components/nav-landing/nav-landing.component';
=======
import { MenuComponent } from './components/menu/menu.component';
import { RegistroComponent } from './components/registro/registro.component';
import { PerfilUsuarioComponent } from './components/perfil-usuario/perfil-usuario.component';
>>>>>>> e9184f5623844a48705c0f31e829b0c0323e273a

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    LoginAdminComponent,
    LoginUsuarioComponent,
    ReproductorComponent,
    AdminComponent,
<<<<<<< HEAD
    NavLoginsComponent,
    NavLandingComponent
  ],
  imports: [
    BrowserModule
=======
    MenuComponent,
    RegistroComponent,
    PerfilUsuarioComponent,
>>>>>>> e9184f5623844a48705c0f31e829b0c0323e273a
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
