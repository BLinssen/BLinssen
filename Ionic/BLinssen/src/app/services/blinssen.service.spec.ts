import { TestBed } from '@angular/core/testing';

import { BLinssenService } from './blinssen.service';

describe('BLinssenService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BLinssenService = TestBed.get(BLinssenService);
    expect(service).toBeTruthy();
  });
});
