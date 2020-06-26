import { TestBed } from '@angular/core/testing';

import { PresentacionesService } from './presentaciones.service';

describe('PresentacionesService', () => {
  let service: PresentacionesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PresentacionesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
