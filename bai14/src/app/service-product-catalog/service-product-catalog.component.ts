import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { CatalogService } from '../catalog.service';

@Component({
  selector: 'app-service-product-catalog',
  imports: [NgFor],
  templateUrl: './service-product-catalog.component.html',
  styleUrl: './service-product-catalog.component.css',
})
export class ServiceProductCatalogComponent {
  public categories: any

  constructor(cservice: CatalogService) {
    this.categories = cservice.getCategories()
  }
}
