import { TestBed } from '@angular/core/testing';

<<<<<<< HEAD:Frontend/src/app/services/viajes.service.spec.ts
import { ViajesService } from './viajes.service';
=======
import { ViajesService} from './viajes.service';
>>>>>>> c9dee85ef48a3dfa3729f3aa48b78c36931f3027:Frontend/src/app/services/viajes.service.spec.ts

describe('ViajesService', () => {
  let service: ViajesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViajesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
