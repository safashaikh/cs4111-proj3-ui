import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MostPopularProducts } from './mostPopularProducts';
import { Observable } from 'rxjs';
import { MostPopularVendors } from './mostPopularVendors';
import { Globals } from 'src/app/app.component';

let globals = new Globals()

@Injectable({
  providedIn: 'root'
})
export class MetricsService {
  allProducts: MostPopularProducts[] = [];

  constructor(private http: HttpClient){}

  getMostPurchasedProductServiceUrl(): string {
    return globals.hosturl+'/metrics/most_purchased';
  }

  getMostLikedProductsServiceUrl(): string {
    return globals.hosturl+'/metrics/most_liked';
  }

  getMostPopularVendorsServiceUrl(): string {
    return globals.hosturl+'/metrics/popular_vendors';
  }

  getMostPopularProducts(num: Number) : Observable<MostPopularProducts[]> {
    let theUrl: string;
    theUrl = this.getMostPurchasedProductServiceUrl()+"?count="+num;
    return this.http.get<MostPopularProducts[]>(theUrl);
  }

  getMostLikedProducts(num: Number) : Observable<MostPopularProducts[]> {
    let theUrl: string;
    theUrl = this.getMostLikedProductsServiceUrl()+"?count="+num;
    return this.http.get<MostPopularProducts[]>(theUrl);
  }

  getMostPopularVendors(num: Number) : Observable<MostPopularVendors[]> {
    let theUrl: string;
    theUrl = this.getMostPopularVendorsServiceUrl()+"?count="+num;
    return this.http.get<MostPopularVendors[]>(theUrl);
  }
}
