import { Component, OnInit } from '@angular/core';
import { MostPopularProducts } from './mostPopularProducts';
import { MetricsService } from './metrics.service';
import { MostPopularVendors } from './mostPopularVendors';

@Component({
  selector: 'app-metrics',
  templateUrl: './metrics.component.html',
  styleUrls: ['./metrics.component.scss']
})
export class MetricsComponent implements OnInit {
  mostPurchasedProducts: MostPopularProducts[]=[];
  mostLikedProducts: MostPopularProducts[]=[];
  mostPopularVendors: MostPopularVendors[]=[];
  testInp: string;
  showProducts = true;
  metricsService: MetricsService;
  num: Number = 10;
  constructor(metricsService: MetricsService) {
    this.testInp = "";
    this.metricsService = metricsService;
  }

  ngOnInit(): void {
    this.metricsService.getMostPopularProducts(this.num)
    .subscribe( data => this.mostPurchasedProducts = data)
    this.metricsService.getMostPopularVendors(this.num)
    .subscribe( data => this.mostPopularVendors = data)
    this.metricsService.getMostLikedProducts(this.num)
    .subscribe( data => this.mostLikedProducts = data)
  }

  onSomethingInput(e: Event) : void {
    console.log("Input = ", (<HTMLInputElement> e.target).value);
    this.testInp = (<HTMLInputElement> e.target).value;
  }

  toggleProducts(): void {
    this.showProducts = !this.showProducts;
  }

  onNumChange(event: any) : void {
    this.num = event.target.value
    this.metricsService.getMostPopularProducts(this.num)
      .subscribe( data => this.mostPurchasedProducts = data)
    this.metricsService.getMostPopularVendors(this.num)
      .subscribe( data => this.mostPopularVendors = data)
    this.metricsService.getMostLikedProducts(this.num)
      .subscribe( data => this.mostLikedProducts = data)
  }

}
