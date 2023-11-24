import { TestBed } from '@angular/core/testing';

import { LocalStoregeService } from './local-storege.service';

describe('LocalStoregeService', () => {
  let service: LocalStoregeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalStoregeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
