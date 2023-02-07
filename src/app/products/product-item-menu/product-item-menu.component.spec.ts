import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductItemMenuComponent } from './product-item-menu.component';

describe('ProductItemMenuComponent', () => {
  let component: ProductItemMenuComponent;
  let fixture: ComponentFixture<ProductItemMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductItemMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductItemMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
