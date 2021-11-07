import { Component, OnInit } from '@angular/core';
import { VendorsService } from './vendors.service';
import { Vendor } from './vendor'
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-vendors',
  templateUrl: './vendors.component.html',
  styleUrls: ['./vendors.component.scss']
})
export class VendorsComponent implements OnInit {
  vendors: Vendor[] = [];
  vendorService: VendorsService;
  pID: string;
  
  constructor(vendorService: VendorsService, public router: Router, private route: ActivatedRoute) {
    this.vendorService = vendorService;
    this.pID = '0';
   }

  ngOnInit(): void {
    console.log('Vendors Initialized');
    console.log(this.router.url)
    if (this.router.url == '/vendors'){
      this.vendorService.getVendors()
      .subscribe( data => this.vendors = data)
    }else{
      this.pID = this.route.snapshot.params['pid']
      this.vendorService.getProductVendors(this.pID)
      .subscribe( data => this.vendors = data)
    }
  }

}
