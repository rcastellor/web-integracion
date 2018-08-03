import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdicionAplicacionesComponent } from './edicion-aplicaciones.component';

describe('EdicionAplicacionesComponent', () => {
  let component: EdicionAplicacionesComponent;
  let fixture: ComponentFixture<EdicionAplicacionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdicionAplicacionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdicionAplicacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
