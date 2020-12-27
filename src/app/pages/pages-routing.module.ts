import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AcademyRegisterFormComponent } from './academy-register-form/academy-register-form.component';
import { CoachRegisterFormComponent } from './coach-register-form/coach-register-form.component';
import { PagesComponent } from './pages.component';
import { PlayerRegisterFormComponent } from './player-register-form/player-register-form.component';
import { SupervisorRegisterFormComponent } from './supervisor-register-form/supervisor-register-form.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: '', redirectTo: 'dashboard', pathMatch: 'full'
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(({ DashboardModule }) => DashboardModule)
      },
      {
        path: 'player-register-form',
        component: PlayerRegisterFormComponent
      },
      {
        path: 'academy-register-form',
        component: AcademyRegisterFormComponent
      },
      {
        path: 'coach-register-form',
        component: CoachRegisterFormComponent
      },
      {
        path: 'supervisor-register-form',
        component: SupervisorRegisterFormComponent
      }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
