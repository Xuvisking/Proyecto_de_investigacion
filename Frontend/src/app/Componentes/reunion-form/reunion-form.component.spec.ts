import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReunionFormComponent } from './reunion-form.component';

describe('ReunionFormComponent', () => {
  let component: ReunionFormComponent;
  let fixture: ComponentFixture<ReunionFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReunionFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReunionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
