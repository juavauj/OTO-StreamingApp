import { TestBed } from '@angular/core/testing';

import { CancionService } from './cancion.service';

describe('Cancion.ServiceService', () => {
  let service: CancionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CancionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
