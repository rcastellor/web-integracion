import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectoresAplicacionesComponent } from './sectores-aplicaciones.component';

describe('SectoresAplicacionesComponent', () => {
  let component: SectoresAplicacionesComponent;
  let fixture: ComponentFixture<SectoresAplicacionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectoresAplicacionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectoresAplicacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
