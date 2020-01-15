import { TestBed } from '@angular/core/testing';

import { TransactServiceService } from './transact-service.service';

describe('TransactServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TransactServiceService = TestBed.get(TransactServiceService);
    expect(service).toBeTruthy();
  });
});
