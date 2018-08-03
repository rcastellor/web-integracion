import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelRelacionadosComponent } from './panel-relacionados.component';

describe('PanelRelacionadosComponent', () => {
  let component: PanelRelacionadosComponent;
  let fixture: ComponentFixture<PanelRelacionadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelRelacionadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelRelacionadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
