import { TestBed } from '@angular/core/testing';

import { QbDeptService } from './qb-dept.service';

describe('QbDeptService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QbDeptService = TestBed.get(QbDeptService);
    expect(service).toBeTruthy();
  });
});
