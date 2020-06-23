import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViajesFromComponent } from './viajes-from.component';

describe('ViajesFromComponent', () => {
  let component: ViajesFromComponent;
  let fixture: ComponentFixture<ViajesFromComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViajesFromComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViajesFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
