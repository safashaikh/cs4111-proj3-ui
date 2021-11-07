import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { ProductsService } from './products.service';

@Component({
  selector: 'app-product',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  allProducts: Product[]=[];
  testInp: string;
  showProducts = true;
  productService: ProductsService;

  constructor(productService: ProductsService) {
    this.testInp = "";
    this.productService = productService;
  }

  ngOnInit(): void {
    this.productService.getProducts()
    .subscribe( data => this.allProducts = data)
  }

  onSomethingInput(e: Event) : void {
    console.log("Input = ", (<HTMLInputElement> e.target).value);
    this.testInp = (<HTMLInputElement> e.target).value;
  }

  toggleProducts(): void {
    this.showProducts = !this.showProducts;
  }

}
