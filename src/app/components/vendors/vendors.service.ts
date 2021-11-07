import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from "@angular/router";
import { Vendor } from './vendor'
import { Observable } from 'rxjs';
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class VendorsService {
  vendors: Vendor[] = [];
  constructor(private http: HttpClient, private router: Router) {
  }

  getVendorsServiceUrl(id: string): string {
    if (this.router.url === '/vendors' || this.router.url === '/vendors/:vid'){
      let result: string;
      if (id!=''){
        result = 'http://127.0.0.1:5000/vendors/'+id;
      }else{
        result = 'http://127.0.0.1:5000/vendors';
      }
      return result;
    }
    else{
      return 'http://127.0.0.1:5000/products/'+id+'/vendors';
    }
  }

  getProductVendors(id: string): Observable<Vendor[]> {
    let theUrl: string;

    theUrl = this.getVendorsServiceUrl(id);
    return this.http.get<Vendor[]>(theUrl);
  }

  getVendors() : Observable<Vendor[]> {
    let theUrl: string;

    theUrl = this.getVendorsServiceUrl('');
    return this.http.get<Vendor[]>(theUrl);
  }

  getVendor(id: string): Observable<Vendor[]> {
    let theUrl: string;

    theUrl = this.getVendorsServiceUrl(id);
    return this.http.get<Vendor[]>(theUrl);
  }
}
