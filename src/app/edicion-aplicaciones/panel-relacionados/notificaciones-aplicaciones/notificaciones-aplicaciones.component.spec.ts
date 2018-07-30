import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificacionesAplicacionesComponent } from './notificaciones-aplicaciones.component';

describe('NotificacionesAplicacionesComponent', () => {
  let component: NotificacionesAplicacionesComponent;
  let fixture: ComponentFixture<NotificacionesAplicacionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificacionesAplicacionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificacionesAplicacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
