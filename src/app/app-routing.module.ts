import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { CustomerComponent } from './components/customer/customer.component';
import { UserloginComponent } from './components/userlogin/userlogin.component';
import { CustomersComponent } from './components/customers/customers.component';
import { VendorsComponent} from './components/vendors/vendors.component';

const routes: Routes = [
  { path: 'products', component: ProductsComponent },
  { path: 'products/:pid/vendors', component: VendorsComponent},
  { path: 'vendors', component: VendorsComponent},
  { path: 'userlogin', component: UserloginComponent },
  { path: 'customers', component: CustomersComponent },
  { path: 'customers/:cID', component: CustomerComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
