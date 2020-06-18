import { TestBed } from '@angular/core/testing';

import { ControlReproService } from './control-repro.service';

describe('ControlReproService', () => {
  let service: ControlReproService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ControlReproService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
