import { TestBed } from '@angular/core/testing';

import { GrupoVerService } from './grupover.service';

describe('GrupoVerService', () => {
  let service: GrupoVerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GrupoVerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
