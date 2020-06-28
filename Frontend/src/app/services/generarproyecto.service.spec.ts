import { TestBed } from '@angular/core/testing';

import { GenerarproyectoService } from './generarproyecto.service';

describe('GenerarproyectoService', () => {
  let service: GenerarproyectoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GenerarproyectoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
