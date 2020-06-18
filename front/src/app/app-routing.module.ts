import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

// Importar los componentes
import { LandingComponent } from './components/landing/landing.component';
import { RegistroComponent } from './components/registro/registro.component';
import { LoginUsuarioComponent } from './components/login-usuario/login-usuario.component';
import { LoginAdminComponent } from './components/login-admin/login-admin.component';
import { PerfilUsuarioComponent } from './components/perfil-usuario/perfil-usuario.component';
import { QuienesSomosComponent } from './components/quienes-somos/quienes-somos.component';
import { TrabajaConNosotrosComponent } from './components/trabaja-con-nosotros/trabaja-con-nosotros.component';
import { PremiumComponent } from './components/premium/premium.component';
import { VistaPerfilComponent } from './components/vista-perfil/vista-perfil.component';
import { EditarPerfilComponent } from './components/editar-perfil/editar-perfil.component';
import { ReproductorComponent } from './components/reproductor/reproductor.component';
import { VariosReproductorComponent } from './components/varios-reproductor/varios-reproductor.component';
import { AlbumsReproductorComponent } from './components/albums-reproductor/albums-reproductor.component';
import { ArtistasReproductorComponent } from './components/artistas-reproductor/artistas-reproductor.component';
import { CancionesReproComponent } from './components/canciones-repro/canciones-repro.component'

// Import de Guards
import { AuthGuard } from './guards/auth.guard';
import { RoleGuard } from './guards/role.guard';

// subrouting admins
import { AdminComponent } from './components/admin/admin.component';
import { AlbumesAdminComponent } from './components/albumes-admin/albumes-admin.component';
import { CancionesAdminComponent } from './components/canciones-admin/canciones-admin.component';
import { UsuariosAdminComponent  } from './components/usuarios-admin/usuarios-admin.component';
import { PlaylistAdminComponent  } from './components/playlist-admin/playlist-admin.component';
import { WelcomeAdminComponent  } from './components/welcome-admin/welcome-admin.component';
import { ArtistasAdminComponent  } from './components/artistas-admin/artistas-admin.component';

// Relacionar rutas con componentes
const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'loginUsuario', component: LoginUsuarioComponent },
  { path: 'loginAdmin', component: LoginAdminComponent },
  { path: 'perfil', component: PerfilUsuarioComponent,
    canActivate : [AuthGuard],  // Revisa si el usuario ha iniciado sesion para acceder a la ruta vista
    children: [
      {path: 'vista', component: VistaPerfilComponent},
      {path: 'editar', component: EditarPerfilComponent}
    ]
  },
  { path: 'quienes-somos', component: QuienesSomosComponent },
  { path: 'trabaja-con-nosotros', component: TrabajaConNosotrosComponent },
  { path: 'premium', component: PremiumComponent },
  { path: 'reproductor', component: ReproductorComponent,
    children:[
      {path: '', component: VariosReproductorComponent},
      {path: 'albumes', component: AlbumsReproductorComponent },
      {path: 'artistas', component:ArtistasReproductorComponent},
      {path: 'canciones', component:CancionesReproComponent}

    ]
  },
  { path: 'admin', component: AdminComponent,
    data: {rol: 'admin'},
    canActivate: [AuthGuard,RoleGuard],
    children:  [
      {
        path: 'canciones',
        component: CancionesAdminComponent
      },
      {
        path: 'albumes',
        component: AlbumesAdminComponent
      },
      {
        path: 'albumes',
        component: AlbumesAdminComponent
      },
      {
        path: 'usuarios',
        component: UsuariosAdminComponent
      },
      {
        path: 'playlist',
        component: PlaylistAdminComponent
      },
      {
        path: 'welcome',
        component: WelcomeAdminComponent
      },
      {
        path: '',
        component: WelcomeAdminComponent
      },
      {
        path: 'artistas',
        component: ArtistasAdminComponent
      },
  ] },

];

// Importamos en la raiz de RouterModule el array de rutas y luego exportamos el nuevo Módulo
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

// Exportar el módulo
export class AppRoutingModule {}
