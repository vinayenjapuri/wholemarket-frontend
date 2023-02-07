import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSearchbarComponent } from './product-searchbar.component';

describe('ProductSearchbarComponent', () => {
  let component: ProductSearchbarComponent;
  let fixture: ComponentFixture<ProductSearchbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductSearchbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductSearchbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
