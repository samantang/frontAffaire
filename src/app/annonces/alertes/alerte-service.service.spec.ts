import { TestBed, inject } from '@angular/core/testing';

import { AlerteServiceService } from './alerte-service.service';

describe('AlerteServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AlerteServiceService]
    });
  });

  it('should be created', inject([AlerteServiceService], (service: AlerteServiceService) => {
    expect(service).toBeTruthy();
  }));
});
