import { TestBed } from '@angular/core/testing';

import { GrupoCrearService } from './grupocrear.service';

describe('GrupocrearService', () => {
  let service: GrupoCrearService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GrupoCrearService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
