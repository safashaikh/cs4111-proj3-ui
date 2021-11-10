import { Component, OnInit } from '@angular/core';
import { Order } from './order';
import { OrdersService } from './orders.service'
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  orders: Order[] = [];
  ordersService: OrdersService;
  search: string = "";
  cid: string;
  num: Number = 10;
  constructor(ordersService: OrdersService, public router: Router, private route: ActivatedRoute) {
    this.ordersService = ordersService;
    this.cid = '0';
  }

  ngOnInit(): void {
    if (this.router.url == '/orders'){
      this.ordersService.getOrders(this.num)
      .subscribe( data => this.orders = data)
    } else {
      this.cid = this.route.snapshot.params['cID']
      this.ordersService.getCustomerOrders(this.cid, this.num)
      .subscribe( data => this.orders = data)
    }
  }

  onSearch() : void {
    this.ordersService.getOrdersByOid(this.search, this.cid, this.num)
    .subscribe( data => this.orders = data)
  }

  onSearchChange(event: any) : void {
    this.search = event.target.value;
  }

  onNumChange(event: any) : void {
    this.num = event.target.value;
    if (this.router.url === '/customers/:cid'){
      this.ordersService.getCustomerOrders(this.cid, this.num)
        .subscribe( data => this.orders = data)
    }else{
      this.ordersService.getOrders(this.num)
        .subscribe( data => this.orders = data)
    }
  }

}
