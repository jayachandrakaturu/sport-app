import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { AcademyRegisterFormComponent } from './academy-register-form/academy-register-form.component';
import { PlayerRegisterFormComponent } from './player-register-form/player-register-form.component';
import { CoachRegisterFormComponent } from './coach-register-form/coach-register-form.component';


@NgModule({
  declarations: [PagesComponent, AcademyRegisterFormComponent, PlayerRegisterFormComponent, CoachRegisterFormComponent],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
