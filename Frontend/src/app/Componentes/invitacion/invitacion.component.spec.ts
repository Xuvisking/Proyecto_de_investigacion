import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvitacionComponent } from './invitacion.component';

describe('InvitacionComponent', () => {
  let component: InvitacionComponent;
  let fixture: ComponentFixture<InvitacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvitacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvitacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
