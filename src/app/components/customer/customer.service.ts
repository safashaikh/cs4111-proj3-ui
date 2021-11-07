import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Address, Customer } from './customer';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';



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

  getCustomerAddress(userID: string): Observable<Address> {
    let theUrl: string;

    theUrl = this.getCustomerServiceUrl(userID) + '/address';
    return this.http.get<Address>(theUrl);
  }

  getCustomers() : Observable<Customer[]> {
    let theUrl: string;

    theUrl = this.getCustomerServiceUrl('');
    return this.http.get<Customer[]>(theUrl);
  }
}
