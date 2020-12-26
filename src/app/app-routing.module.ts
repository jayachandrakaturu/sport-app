import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./login/login.module').then(({ LoginModule }) => LoginModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(({ LoginModule }) => LoginModule)
  },
  {
    path: 'pages',
    loadChildren: () => import('./pages/pages.module').then(({ PagesModule }) => PagesModule)
  }
]
  ;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
