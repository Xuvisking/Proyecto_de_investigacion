import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetionmiembrosComponent } from './getionmiembros.component';

describe('GetionmiembrosComponent', () => {
  let component: GetionmiembrosComponent;
  let fixture: ComponentFixture<GetionmiembrosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetionmiembrosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetionmiembrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
