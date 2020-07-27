import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrupoEliminarComponent } from '../gruposeliminar/grupoeliminar.component';

describe('GrupoEliminarComponent', () => {
  let component: GrupoEliminarComponent;
  let fixture: ComponentFixture<GrupoEliminarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrupoEliminarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrupoEliminarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
