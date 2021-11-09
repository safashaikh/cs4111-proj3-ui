import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './product';
import { Observable } from 'rxjs';
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  allProducts: Product[] = [];
  constructor(private http: HttpClient, private router: Router) {
  }

  getProductServiceUrl(id: string): string {
    let result: string;

    if (this.router.url === '/products' || this.router.url === '/products/:pid') {
      if (id=='') {
        result = 'http://127.0.0.1:5000/products'
      } else{
        result = 'http://127.0.0.1:5000/products/'+id;
      }
      return result;
    } else {
      return 'http://127.0.0.1:5000/vendors/'+id+'/products';
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
    let theUrl: string = "http://127.0.0.1:5000/products?name="+search;
    console.log(this.http.get<Product[]>(theUrl));
    return this.http.get<Product[]>(theUrl);
  }

}
