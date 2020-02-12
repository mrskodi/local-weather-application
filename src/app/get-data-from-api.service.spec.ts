import { TestBed } from '@angular/core/testing';

import { GetDataFromAPIService } from './get-data-from-api.service';

describe('GetDataFromAPIService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetDataFromAPIService = TestBed.get(GetDataFromAPIService);
    expect(service).toBeTruthy();
  });
});
