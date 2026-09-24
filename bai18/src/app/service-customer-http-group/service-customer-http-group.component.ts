import { Component, signal } from '@angular/core';
import { NgFor } from '@angular/common';
import { CustomerHttpService } from '../customer-http.service';
import { ICustomerGroup } from '../icustomer';

@Component({
  selector: 'app-service-customer-http-group',
  imports: [NgFor],
  templateUrl: './service-customer-http-group.component.html',
  styleUrl: './service-customer-http-group.component.css',
})
export class ServiceCustomerHttpGroupComponent {
  // Dung signal vi Angular 21 mac dinh zoneless: gan thuoc tinh thuong trong subscribe se khong cap nhat giao dien
  public groups = signal<ICustomerGroup[]>([])
  errMessage = signal<string>('')

  constructor(_service: CustomerHttpService) {
    _service.getCustomerGroups().subscribe({
      next: (data) => { this.groups.set(data) },
      error: (err) => { this.errMessage.set(err.message) }
    })
  }
}
