import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosBasicosAplicacionesComponent } from './datos-basicos-aplicaciones.component';

describe('DatosBasicosAplicacionesComponent', () => {
  let component: DatosBasicosAplicacionesComponent;
  let fixture: ComponentFixture<DatosBasicosAplicacionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatosBasicosAplicacionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatosBasicosAplicacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
