import { TestBed, inject } from '@angular/core/testing';

import { NewsdataService } from './newsdata.service';

describe('NewsdataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NewsdataService]
    });
  });

  it('should be created', inject([NewsdataService], (service: NewsdataService) => {
    expect(service).toBeTruthy();
  }));
});
