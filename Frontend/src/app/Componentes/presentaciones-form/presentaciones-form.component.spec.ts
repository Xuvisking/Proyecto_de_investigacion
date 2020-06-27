import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentacionesFormComponent } from './presentaciones-form.component';

describe('PresentacionesFormComponent', () => {
  let component: PresentacionesFormComponent;
  let fixture: ComponentFixture<PresentacionesFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresentacionesFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresentacionesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
