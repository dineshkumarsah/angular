import { TestBed } from '@angular/core/testing';

import { LeavemanageService } from './leavemanage.service';

describe('LeavemanageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LeavemanageService = TestBed.get(LeavemanageService);
    expect(service).toBeTruthy();
  });
});
