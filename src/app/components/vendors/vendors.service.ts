import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from "@angular/router";
import { Vendor } from './vendor'
import { Observable } from 'rxjs';
import { Router } from '@angular/router'
import { Globals } from 'src/app/app.component';

let globals = new Globals();

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
        result = globals.hosturl+'/vendors/'+id;
      }else{
        result = globals.hosturl+'/vendors';
      }
      return result;
    }
    else{
      return globals.hosturl+'/products/'+id+'/vendors';
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

  getVendorsByName(search: any) : Observable<Vendor[]> {
    if(search === "") {
      return this.getVendors()
    }
    console.log(search)
    let theUrl: string = globals.hosturl+"/vendors?name="+search;
    console.log(this.http.get<Vendor[]>(theUrl));
    return this.http.get<Vendor[]>(theUrl);
  }
}
