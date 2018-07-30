import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciosSincronosAplicacionesComponent } from './servicios-sincronos-aplicaciones.component';

describe('ServiciosSincronosAplicacionesComponent', () => {
  let component: ServiciosSincronosAplicacionesComponent;
  let fixture: ComponentFixture<ServiciosSincronosAplicacionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiciosSincronosAplicacionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiciosSincronosAplicacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
