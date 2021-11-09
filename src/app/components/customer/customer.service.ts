import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from './customer';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

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

    if ((theUrl.includes('127.0.0.1')) || (theUrl.includes('localhost')))
    {
      result = 'http://127.0.0.1:5000/users/'+id;
    } else {
      result = 'http://useraddressflask-env.eba-2thfz2gi.us-east-1.elasticbeanstalk.com/users/'+id;
    }
    if (id!=''){
      result = 'http://127.0.0.1:5000/users/'+id;
    }else{
      result = 'http://127.0.0.1:5000/users';
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
    let theUrl: string = "http://127.0.0.1:5000/users?name="+search;
    console.log(this.http.get<Customer[]>(theUrl));
    return this.http.get<Customer[]>(theUrl);
  }
}
