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

  name: string;
  phone: string;
  username:string;
  password:string;
  email:string;
  
  constructor(userService: CustomerService, private route: ActivatedRoute) {
    this.userService = userService;
    this.currCustomer = new Customer(0,"ex","ex","ex", "ex","ex");
    this.cID = '0';
    this.userAddr = new Address(0,'','','','','','');
    this.name = ""
    this.phone = ""
    this.username = ""
    this.password = ""
    this.email = ""
   }

  ngOnInit(): void {
    this.cID = this.route.snapshot.params['cID'];
    this.userService.getCustomer(this.cID)
    .subscribe( data => { 
      console.log(data)
      this.currCustomer = data[0]
    });
  }

  onSave(): void {
    let newCustomer : Customer =  new Customer(this.currCustomer.cid,
                                                this.username,
                                                this.password,
                                                this.name, 
                                                this.email,
                                                this.phone); 
    if (this.name === "") {
      newCustomer.name = this.currCustomer.name
    }
    if (this.phone === "") {
      newCustomer.phone = this.currCustomer.phone
    }
    if (this.email === "") {
      newCustomer.email = this.currCustomer.email
    }
    if (this.password === "") {
      newCustomer.password = this.currCustomer.password
    }
    if (this.username === "") {
      newCustomer.username = this.currCustomer.username
    }

    this.userService.updateCustomer(newCustomer).subscribe( data => { 
      console.log(data)
      this.currCustomer = data
    });
  }

  onNameChange(event: any): void {
    this.name = event.target.value;
  }

  onPhoneChange(event: any): void {
    this.phone = event.target.value;
  }

  onEmailChange(event: any): void {
    this.email = event.target.value;
  }

  onUsernameChange(event: any): void {
    this.username = event.target.value;
  }

  onPasswordChange(event: any): void {
    this.password = event.target.value;
  }
}
