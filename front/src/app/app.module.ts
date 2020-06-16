import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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

import { ArtistaService } from './services/artista.service';
import { UsuarioService } from './services/usuario.service';
import { NavSwitchService } from './services/nav-switch.service';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { AlbumesAdminComponent } from './components/albumes-admin/albumes-admin.component';
import { FilterPipe } from './pipes/filter.pipe';
import { CancionesAdminComponent } from './components/canciones-admin/canciones-admin.component';
import { UsuariosAdminComponent } from './components/usuarios-admin/usuarios-admin.component';
import { PlaylistAdminComponent } from './components/playlist-admin/playlist-admin.component';
import { WelcomeAdminComponent } from './components/welcome-admin/welcome-admin.component';
import { VistaPerfilComponent } from './components/vista-perfil/vista-perfil.component';
import { EditarPerfilComponent } from './components/editar-perfil/editar-perfil.component';
import { ArtistasAdminComponent } from './components/artistas-admin/artistas-admin.component'

// Importar Guards

import { AuthGuard } from './guards/auth.guard';
import { RoleGuard } from './guards/role.guard';

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
    UsuariosComponent,
    AlbumesAdminComponent,
    FilterPipe,
    CancionesAdminComponent,
    UsuariosAdminComponent,
    PlaylistAdminComponent,
    WelcomeAdminComponent,
    VistaPerfilComponent,
    EditarPerfilComponent,
    ArtistasAdminComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule, BrowserAnimationsModule],
  providers: [
    UsuarioService,
    NavSwitchService,
    AuthGuard,
    RoleGuard,
    ArtistaService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
