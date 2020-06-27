import { TestBed } from '@angular/core/testing';

import { Gestionmiembros } from './gestionmiembros.service';

describe('GestionmiembrosService', () => {
  let service: Gestionmiembros;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Gestionmiembros);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
