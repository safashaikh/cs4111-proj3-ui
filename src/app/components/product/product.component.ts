import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { ProductsService } from './products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  allProducts: Product[];
  testInp: string;
  showProducts = true;
  productService: ProductsService;

  constructor(productService: ProductsService) {
    this.allProducts = productService.getAllProducts();
    this.testInp = "";
    this.productService = productService;
  }

  ngOnInit(): void {
    this.productService.getProducts()
    .subscribe( data => this.allProducts = {...data})
  }

  onSomethingInput(e: Event) : void {
    console.log("Input = ", (<HTMLInputElement> e.target).value);
    this.testInp = (<HTMLInputElement> e.target).value;
  }

  toggleProducts(): void {
    this.showProducts = !this.showProducts;
  }

}
