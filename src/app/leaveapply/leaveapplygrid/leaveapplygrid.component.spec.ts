import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveapplygridComponent } from './leaveapplygrid.component';

describe('LeaveapplygridComponent', () => {
  let component: LeaveapplygridComponent;
  let fixture: ComponentFixture<LeaveapplygridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeaveapplygridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaveapplygridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
