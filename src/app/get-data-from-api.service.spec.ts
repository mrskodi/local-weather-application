import { TestBed } from '@angular/core/testing';

import { GetDataFromAPIService } from './get-data-from-api.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('GetDataFromAPIService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: GetDataFromAPIService = TestBed.get(GetDataFromAPIService);
    expect(service).toBeTruthy();
  });
});
