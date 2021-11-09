import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './product';
import { Observable } from 'rxjs';
import { Router } from '@angular/router'
import { Globals } from 'src/app/app.component';

let globals = new Globals();


@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  allProducts: Product[] = [];
  hosturl: string;
  constructor(private http: HttpClient, private router: Router) {
    let globals = new Globals();
    this.hosturl = globals.hosturl;
  }

  getProductServiceUrl(id: string): string {
    let result: string;

    if (this.router.url === '/products' || this.router.url === '/products/:pid') {
      if (id=='') {
        result = globals.hosturl+'/products'
      } else{
        result = globals.hosturl+'/products/'+id;
      }
      return result;
    } else {
      return globals.hosturl+'/vendors/'+id+'/products';
    }
  }

  getProduct(productID: string): Observable<Product> {
    let theUrl: string;

    theUrl = this.getProductServiceUrl(productID);
    return this.http.get<Product>(theUrl);
  }

  getProducts() : Observable<Product[]> {
    let theUrl: string;

    theUrl = this.getProductServiceUrl('');
    return this.http.get<Product[]>(theUrl);
  }

  getAllProducts(): Product[] {
    return this.allProducts;
  }

  getVendorProducts(vendorID: string): Observable<Product[]> {
    let theUrl: string;

    theUrl = this.getProductServiceUrl(vendorID);
    return this.http.get<Product[]>(theUrl);
  }

  getProductsByName(search: any) : Observable<Product[]> {
    if(search === "") {
      return this.getProducts()
    }
    console.log(search)
    let theUrl: string = globals.hosturl+"/products?name="+search;
    console.log(this.http.get<Product[]>(theUrl));
    return this.http.get<Product[]>(theUrl);
  }
}
