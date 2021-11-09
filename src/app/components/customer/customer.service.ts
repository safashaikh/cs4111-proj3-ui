import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from './customer';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { Globals } from 'src/app/app.component';

let globals = new Globals();

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  users: Customer[] = [];
  userUrl: string;

  constructor(private http: HttpClient) {
    this.userUrl = "";
  }

  getCustomerServiceUrl(id: string): string {
    const theUrl = window.location.href;
    let result: string;
    
    if (id!=''){
      result = globals.hosturl+'/users/'+id;
    }else{
      result = globals.hosturl+'/users';
    }
    return result;
  }
  

  getCustomer(userID: string): Observable<Customer[]> {
    let theUrl: string;

    theUrl = this.getCustomerServiceUrl(userID);
    return this.http.get<Customer[]>(theUrl);
  }

  getCustomers() : Observable<Customer[]> {
    let theUrl: string;

    theUrl = this.getCustomerServiceUrl('');
    return this.http.get<Customer[]>(theUrl);
  }

  updateCustomer(newCustomer: Customer) : Observable<Customer> {
    let theUrl: string;
    theUrl = this.getCustomerServiceUrl(String(newCustomer.cid));
    return this.http.post<Customer>(theUrl, newCustomer, httpOptions);
  }

  getCustomersByName(search: any) : Observable<Customer[]> {
    if(search === "") {
      return this.getCustomers()
    }
    console.log(search)
    let theUrl: string = globals.hosturl+"/users?name="+search;
    console.log(this.http.get<Customer[]>(theUrl));
    return this.http.get<Customer[]>(theUrl);
  }
}
