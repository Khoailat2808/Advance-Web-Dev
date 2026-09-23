import { Routes } from '@angular/router';
import { ServiceProductCatalogComponent } from './service-product-catalog/service-product-catalog.component';

export const routes: Routes = [
  { path: '', redirectTo: 'service-product-catalog', pathMatch: 'full' },
  { path: 'service-product-catalog', component: ServiceProductCatalogComponent },
];
