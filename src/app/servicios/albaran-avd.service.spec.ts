import { TestBed } from '@angular/core/testing';

import { AlbaranAvdService } from './albaran-avd.service';

describe('AlbaranAvdService', () => {
  let service: AlbaranAvdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlbaranAvdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
