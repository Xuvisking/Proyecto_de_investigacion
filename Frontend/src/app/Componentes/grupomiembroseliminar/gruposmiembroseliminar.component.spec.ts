import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrupoMiembrosEliminarComponent } from '../grupomiembroseliminar/grupomiembroseliminar.component';

describe('GrupoMiembroComponent', () => {
  let component: GrupoMiembrosEliminarComponent;
  let fixture: ComponentFixture<GrupoMiembrosEliminarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrupoMiembrosEliminarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrupoMiembrosEliminarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
