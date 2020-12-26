import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademyRegisterFormComponent } from './academy-register-form.component';

describe('AcademyRegisterFormComponent', () => {
  let component: AcademyRegisterFormComponent;
  let fixture: ComponentFixture<AcademyRegisterFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcademyRegisterFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcademyRegisterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
