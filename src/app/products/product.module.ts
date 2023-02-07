import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductFiltersComponent } from './product-filters/product-filters.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { ProductItemMenuComponent } from './product-item-menu/product-item-menu.component';
import { ProductItemSelectionComponent } from './product-item-selection/product-item-selection.component';
import { ProductSearchbarComponent } from './product-searchbar/product-searchbar.component';
import { ProductSortComponent } from './product-sort/product-sort.component';



@NgModule({
  declarations: [
    ProductFiltersComponent,
    ProductItemComponent,
    ProductItemMenuComponent,
    ProductItemSelectionComponent,
    ProductSearchbarComponent,
    ProductSortComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProductModule { }
