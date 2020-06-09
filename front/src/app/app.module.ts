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
import { RegistroComponent } from './components/registro/registro.component';
import { PerfilUsuarioComponent } from './components/perfil-usuario/perfil-usuario.component';
import { HttpClientModule } from '@angular/common/http';
import { NavLoginsComponent } from './components/nav-logins/nav-logins.component';
import { NavLandingComponent } from './components/nav-landing/nav-landing.component';
import { QuienesSomosComponent } from './components/quienes-somos/quienes-somos.component';
import { TrabajaConNosotrosComponent } from './components/trabaja-con-nosotros/trabaja-con-nosotros.component';
import { PremiumComponent } from './components/premium/premium.component';

//Importar Servicios

import { UsuarioService } from './services/usuario.service';
import { NavSwitchService } from './services/nav-switch.service';
import { UsuariosComponent } from './components/usuarios/usuarios.component'

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    LoginAdminComponent,
    LoginUsuarioComponent,
    ReproductorComponent,
    AdminComponent,
    RegistroComponent,
    PerfilUsuarioComponent,
    NavLoginsComponent,
    NavLandingComponent,
    QuienesSomosComponent,
    TrabajaConNosotrosComponent,
    PremiumComponent,
    UsuariosComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [UsuarioService, NavSwitchService],
  bootstrap: [AppComponent],
})
export class AppModule { }
