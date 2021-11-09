import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { ProductsService } from './products.service';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-product',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  allProducts: Product[]=[];
  productService: ProductsService;
  vID: string;
  search:string = ""

  constructor(productService: ProductsService, public router: Router, private route: ActivatedRoute) {
    this.productService = productService;
    this.vID = '0';
  }

  ngOnInit(): void {
    if (this.router.url == '/products'){
      this.productService.getProducts()
      .subscribe( data => this.allProducts = data)
    } else {
      this.vID = this.route.snapshot.params['vid']
      this.productService.getVendorProducts(this.vID)
      .subscribe( data => this.allProducts = data)
    }
  }

  onSearch() : void {
    this.productService.getProductsByName(this.search)
    .subscribe( data => this.allProducts = data)
  }

  onSearchChange(event: any) : void {
    this.search = event.target.value;
  }
}
