import { TestBed } from '@angular/core/testing';

import { MarkofitServiceService } from './markofit-service.service';

describe('MarkofitServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MarkofitServiceService = TestBed.get(MarkofitServiceService);
    expect(service).toBeTruthy();
  });
});
