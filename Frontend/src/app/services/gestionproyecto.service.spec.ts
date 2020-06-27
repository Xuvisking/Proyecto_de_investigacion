import { TestBed } from '@angular/core/testing';

import { GestionproyectoService } from './gestionproyecto.service';

describe('GestionproyectoService', () => {
  let service: GestionproyectoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GestionproyectoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
