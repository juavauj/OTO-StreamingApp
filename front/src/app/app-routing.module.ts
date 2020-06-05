import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

// Importar los componentes
import { LandingComponent } from './components/landing/landing.component';
import { RegistroComponent } from './components/registro/registro.component';
import { LoginUsuarioComponent } from './components/login-usuario/login-usuario.component';
import { LoginAdminComponent } from './components/login-admin/login-admin.component';
import { PerfilUsuarioComponent } from './components/perfil-usuario/perfil-usuario.component';

// Relacionar rutas con componentes
const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'loginUsuario', component: LoginUsuarioComponent },
  { path: 'loginAdmin', component: LoginAdminComponent },
  { path: 'perfil', component: PerfilUsuarioComponent },
];

// Importamos en la raiz de RouterModule el array de rutas y luego exportamos el nuevo Módulo
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

// Exportar el módulo
export class AppRoutingModule {}
