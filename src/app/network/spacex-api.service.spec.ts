import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { SpaceXService } from '../network/spacex-api.service';

describe('SpacexApiService', () => {
  let service: SpaceXService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], // Import HttpClientTestingModule to mock HttpClient
      providers: [SpaceXService] // Provide SpacexApiService
    });
    service = TestBed.inject(SpaceXService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
