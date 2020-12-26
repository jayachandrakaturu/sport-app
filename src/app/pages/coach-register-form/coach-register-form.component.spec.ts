import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoachRegisterFormComponent } from './coach-register-form.component';

describe('CoachRegisterFormComponent', () => {
  let component: CoachRegisterFormComponent;
  let fixture: ComponentFixture<CoachRegisterFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoachRegisterFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoachRegisterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
