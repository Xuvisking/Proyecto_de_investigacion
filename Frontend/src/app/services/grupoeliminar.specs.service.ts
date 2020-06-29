import { TestBed } from '@angular/core/testing';

import { GrupoEliminarService } from './grupoeliminar.service';

describe('GrupoeliminarService', () => {
  let service: GrupoEliminarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GrupoEliminarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
