import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { AcademyRegisterFormComponent } from './academy-register-form/academy-register-form.component';
import { PlayerRegisterFormComponent } from './player-register-form/player-register-form.component';
import { CoachRegisterFormComponent } from './coach-register-form/coach-register-form.component';
import { SupervisorRegisterFormComponent } from './supervisor-register-form/supervisor-register-form.component';
import { MatSliderModule } from '@angular/material/slider';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [PagesComponent, AcademyRegisterFormComponent, PlayerRegisterFormComponent, CoachRegisterFormComponent, SupervisorRegisterFormComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    MatSliderModule,
    MatInputModule,
    MatDatepickerModule,
    MatSelectModule
  ]
})
export class PagesModule { }
