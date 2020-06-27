import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionproyectoComponent } from './gestionproyecto.component';

describe('GestionproyectoComponent', () => {
  let component: GestionproyectoComponent;
  let fixture: ComponentFixture<GestionproyectoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionproyectoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionproyectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
