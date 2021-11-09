import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer/customer';
import { CustomerService } from '../customer/customer.service';
import { catchError, map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-users',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {
  usersInfo: Customer[] = [];
  userService: CustomerService;
  search: string = ""
  constructor(userService: CustomerService) {
    this.userService = userService;
   }

  ngOnInit(): void {
    console.log('Initialized');
    this.userService.getCustomers()
    .subscribe( data => this.usersInfo = data)
  }

  onSearch() : void {
    this.userService.getCustomersByName(this.search)
    .subscribe( data => this.usersInfo = data)
  }

  onSearchChange(event: any) : void {
    this.search = event.target.value;
  }

}
