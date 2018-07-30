import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeticionesSincronasAplicacionesComponent } from './peticiones-sincronas-aplicaciones.component';

describe('PeticionesSincronasAplicacionesComponent', () => {
  let component: PeticionesSincronasAplicacionesComponent;
  let fixture: ComponentFixture<PeticionesSincronasAplicacionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeticionesSincronasAplicacionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeticionesSincronasAplicacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
