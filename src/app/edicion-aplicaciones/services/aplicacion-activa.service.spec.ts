import { TestBed, inject } from '@angular/core/testing';

import { AplicacionActivaService } from './aplicacion-activa.service';

describe('AplicacionActivaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AplicacionActivaService]
    });
  });

  it('should be created', inject([AplicacionActivaService], (service: AplicacionActivaService) => {
    expect(service).toBeTruthy();
  }));
});
