import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupervisorRegisterFormComponent } from './supervisor-register-form.component';

describe('SupervisorRegisterFormComponent', () => {
  let component: SupervisorRegisterFormComponent;
  let fixture: ComponentFixture<SupervisorRegisterFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupervisorRegisterFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupervisorRegisterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
