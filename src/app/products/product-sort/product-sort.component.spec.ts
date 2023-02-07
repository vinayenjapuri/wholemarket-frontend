import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSortComponent } from './product-sort.component';

describe('ProductSortComponent', () => {
  let component: ProductSortComponent;
  let fixture: ComponentFixture<ProductSortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductSortComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductSortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
