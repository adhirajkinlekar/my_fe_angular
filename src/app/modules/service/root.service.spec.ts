import { TestBed } from '@angular/core/testing';

import { RootService } from './root.service';

describe('ModuleServiceService', () => {
  let service: RootService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RootService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
