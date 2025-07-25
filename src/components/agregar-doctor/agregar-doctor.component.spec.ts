import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarDoctorComponent } from './agregar-doctor.component';

describe('AgregarDoctorComponent', () => {
  let component: AgregarDoctorComponent;
  let fixture: ComponentFixture<AgregarDoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgregarDoctorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
