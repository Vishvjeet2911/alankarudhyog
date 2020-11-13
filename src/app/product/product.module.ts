import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddProductComponent } from './add-product/add-product.component';
import {ReactiveFormsModule} from '@angular/forms';
import { ViewProductComponent } from './view-product/view-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';



@NgModule({
  declarations: [AddProductComponent, ViewProductComponent, UpdateProductComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    UpdateProductComponent
  ]
})
export class ProductModule { }
