import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MatTabsModule } from '@angular/material/tabs';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { UserloginComponent } from './components/userlogin/userlogin.component';
import { ProductsComponent } from './components/products/products.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { CustomerComponent } from './components/customer/customer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CustomersComponent } from './components/customers/customers.component';
import { VendorsComponent } from './components/vendors/vendors.component';


@NgModule({
  declarations: [
    AppComponent,
    UserloginComponent,
    ProductsComponent,
    SearchBarComponent,
    CustomerComponent,
    CustomersComponent,
    VendorsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatIconModule,
    MatSelectModule,
    MatTabsModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
