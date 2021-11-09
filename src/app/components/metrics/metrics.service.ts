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

  getMostPopularProducts() : Observable<MostPopularProducts[]> {
    let theUrl: string;
    theUrl = this.getMostPurchasedProductServiceUrl();
    return this.http.get<MostPopularProducts[]>(theUrl);
  }

  getMostLikedProducts() : Observable<MostPopularProducts[]> {
    let theUrl: string;
    theUrl = this.getMostLikedProductsServiceUrl();
    return this.http.get<MostPopularProducts[]>(theUrl);
  }

  getMostPopularVendors() : Observable<MostPopularVendors[]> {
    let theUrl: string;
    theUrl = this.getMostPopularVendorsServiceUrl();
    return this.http.get<MostPopularVendors[]>(theUrl);
  }
}
