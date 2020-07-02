import { TestBed } from '@angular/core/testing';

import { GrupoMiembrosEliminarService } from './grupomiembroseliminar.service';

describe('GrupoeliminarService', () => {
  let service: GrupoMiembrosEliminarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GrupoMiembrosEliminarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});