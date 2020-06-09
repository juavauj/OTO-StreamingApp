import { TestBed } from '@angular/core/testing';

import { NavSwitchService } from './nav-switch.service';

describe('NavSwitchService', () => {
  let service: NavSwitchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NavSwitchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
