import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Address, Customer } from './customer';
import { CustomerService } from './customer.service';

@Component({
  selector: 'app-user',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {
  currCustomer: Customer;
  cID: string;
  userAddr: Address;
  userService: CustomerService;
  
  allCustomers = true;
  constructor(userService: CustomerService, private route: ActivatedRoute) {
    this.userService = userService;
    this.currCustomer = new Customer(0,"ex","ex","ex", "ex","ex");
    this.cID = '0';
    this.userAddr = new Address(0,'','','','','','');
   }

  ngOnInit(): void {
    this.cID = this.route.snapshot.params['cID'];
    this.userService.getCustomer(this.cID)
    .subscribe( data => this.currCustomer = data[0]);
  }

  // Include for all users page
  /*onLookup(): void {
    if (this.artistName.length > 5) {
      this.imdbService.getArtists(this.artistName)
        .subscribe((data) => this.setArtistInfo(data));
    }
  }*/

}
