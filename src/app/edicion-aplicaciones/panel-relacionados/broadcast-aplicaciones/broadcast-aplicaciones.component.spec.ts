import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BroadcastAplicacionesComponent } from './broadcast-aplicaciones.component';

describe('BroadcastAplicacionesComponent', () => {
  let component: BroadcastAplicacionesComponent;
  let fixture: ComponentFixture<BroadcastAplicacionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BroadcastAplicacionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BroadcastAplicacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
