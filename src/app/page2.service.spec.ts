import { TestBed, inject } from '@angular/core/testing';

import { Page2Service } from './page2.service';

describe('Page2Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Page2Service]
    });
  });

  it('should be created', inject([Page2Service], (service: Page2Service) => {
    expect(service).toBeTruthy();
  }));
});
