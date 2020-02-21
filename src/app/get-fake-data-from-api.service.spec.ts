import { TestBed } from '@angular/core/testing';

import { GetFakeDataFromApiService } from './get-fake-data-from-api.service';

describe('GetFakeDataFromApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetFakeDataFromApiService = TestBed.get(GetFakeDataFromApiService);
    expect(service).toBeTruthy();
  });
});
