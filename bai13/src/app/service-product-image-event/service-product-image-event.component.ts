import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-service-product-image-event',
  imports: [],
  templateUrl: './service-product-image-event.component.html',
  styleUrl: './service-product-image-event.component.css',
})
export class ServiceProductImageEventComponent {
  public products: any

  constructor(pservice: ProductService, private router: Router) {
    this.products = pservice.getProductsWithImages()
  }

  viewDetail(f: any) {
    this.router.navigate(['service-product-image-event', f.ProductId])
  }
}
