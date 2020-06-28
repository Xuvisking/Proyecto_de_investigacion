import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerarproyectoComponent } from './generarproyecto.component';

describe('GenerarproyectoComponent', () => {
  let component: GenerarproyectoComponent;
  let fixture: ComponentFixture<GenerarproyectoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenerarproyectoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerarproyectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
