import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveapplyformComponent } from './leaveapplyform.component';

describe('LeaveapplyformComponent', () => {
  let component: LeaveapplyformComponent;
  let fixture: ComponentFixture<LeaveapplyformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeaveapplyformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaveapplyformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
