import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { Order } from './order'
import { Router } from '@angular/router'
import { Globals } from 'src/app/app.component';
import { ItemOrder } from './itemorder';

let globals = new Globals();

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  
  hosturl: string;
  constructor(private http: HttpClient, private router: Router) { 
    let globals = new Globals();
    this.hosturl = globals.hosturl;
  }

  getOrdersServiceUrl(id: string, num: Number = 10): string {
    let result: string;
    if (this.router.url === '/orders' || this.router.url === '/orders/:oid'){
      if (id!=''){
        result = this.hosturl+'/orders/'+id;
      }else{
        result = this.hosturl+'/orders';
      }
      return result;
    } else {
      return this.hosturl+'/users/'+id+'/orders?count='+num;
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
    let theUrl: string;
    if (this.router.url === '/orders' || this.router.url === '/orders/:oid'){
      theUrl = globals.hosturl+'/orders?oid='+search;
    } else {
      theUrl = globals.hosturl+"/users/"+cid+"/orders?oid="+search;
    }
    console.log(this.http.get<Order[]>(theUrl));
    return this.http.get<Order[]>(theUrl);
  }

  getItemOrdersByOid(oid: string): Observable<ItemOrder[]> {
    let theUrl: string = this.hosturl+"/orders/"+oid+"/itemorders";
    return this.http.get<ItemOrder[]>(theUrl);
  }
}
