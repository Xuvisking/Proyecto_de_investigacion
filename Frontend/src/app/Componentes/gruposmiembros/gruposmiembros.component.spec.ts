import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrupoMiembroComponent } from '../../Componentes/gruposmiembros/grupomiembros.component';

describe('GrupoMiembroComponent', () => {
  let component: GrupoMiembroComponent;
  let fixture: ComponentFixture<GrupoMiembroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrupoMiembroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrupoMiembroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
