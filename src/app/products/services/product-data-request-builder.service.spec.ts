import { TestBed } from '@angular/core/testing';

import { ProductDataRequestBuilderService } from './product-data-request-builder.service';

describe('ProductDataRequestBuilderService', () => {
  let service: ProductDataRequestBuilderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductDataRequestBuilderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
