import { Routes } from '@angular/router';
import { ServiceCustomerHttpGroupComponent } from './service-customer-http-group/service-customer-http-group.component';

export const routes: Routes = [
  { path: '', redirectTo: 'service-customer-http-group', pathMatch: 'full' },
  { path: 'service-customer-http-group', component: ServiceCustomerHttpGroupComponent },
];
