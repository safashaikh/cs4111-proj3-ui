import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemOrder } from '../orders/itemorder';
import { Order } from '../orders/order';
import { OrdersService } from '../orders/orders.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  currOrder: Order;
  oID: string;
  ordersService: OrdersService;
  itemOrders: ItemOrder[] = [];
  constructor(ordersService: OrdersService, private route: ActivatedRoute) { 
    this.ordersService = ordersService;
    this.currOrder = new Order(0,
      "",
      "",
      "",
      "",
      0,
      0,
      "",
      "",
      "",
      "tn",
      "street_address",
      "city: string",
      "state: string",
      "zip: string")
    this.oID = '0'
  }

  ngOnInit(): void {
    this.oID = this.route.snapshot.params['oID'];
    this.ordersService.getOrder(this.oID)
    .subscribe( data => { 
      console.log(data)
      this.currOrder = data[0]
    });
    this.ordersService.getItemOrdersByOid(this.oID)
    .subscribe( data => { 
      this.itemOrders = data
    });
  }

}
