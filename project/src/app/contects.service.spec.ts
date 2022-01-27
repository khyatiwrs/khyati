import { TestBed } from '@angular/core/testing';

import { ContectsService } from './contects.service';

describe('ContectsService', () => {
  let service: ContectsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContectsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
