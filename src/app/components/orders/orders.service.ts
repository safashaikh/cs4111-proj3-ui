import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { Order } from './order'
import { Router } from '@angular/router'
import { Globals } from 'src/app/app.component';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private http: HttpClient, private router: Router) { }

  getOrdersServiceUrl(id: string, num: Number = 10): string {
    let result: string;
    let globals = new Globals();
    if (this.router.url === '/orders' || this.router.url === '/orders/:oid'){
      if (id!=''){
        result = globals.hosturl+'/orders/'+id;
      }else{
        result = globals.hosturl+'/orders';
      }
      return result;
    } else {
      return globals.hosturl+'/users/'+id+'/orders?count='+num;
    }
  }

  getCustomerOrders(id: string, num: Number) : Observable<Order[]> {
    let theUrl: string;
    theUrl = this.getOrdersServiceUrl(id, num);
    return this.http.get<Order[]>(theUrl);
  }

  getOrder(id: string): Observable<Order[]> {
    let theUrl: string;

    theUrl = this.getOrdersServiceUrl(id);
    return this.http.get<Order[]>(theUrl);
  }

  getOrders() : Observable<Order[]> {
    let theUrl: string;

    theUrl = this.getOrdersServiceUrl('');
    return this.http.get<Order[]>(theUrl);
  }

  getOrdersByOid(search: any, cid: string, num: Number) : Observable<Order[]> {
    if(search === "") {
      return this.getCustomerOrders(cid, num);
    }
    console.log(search)
    let theUrl: string = "http://127.0.0.1:5000/orders?oid="+search;
    console.log(this.http.get<Order[]>(theUrl));
    return this.http.get<Order[]>(theUrl);
  }
}
