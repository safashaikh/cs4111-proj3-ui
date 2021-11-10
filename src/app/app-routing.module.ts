import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { CustomerComponent } from './components/customer/customer.component';
import { CustomersComponent } from './components/customers/customers.component';
import { VendorsComponent} from './components/vendors/vendors.component';
import { MetricsComponent } from './components/metrics/metrics.component';
import { OrdersComponent } from './components/orders/orders.component';
import { OrderComponent } from './components/order/order.component';

const routes: Routes = [
  { path: 'products', component: ProductsComponent },
  { path: 'products/:pid/vendors', component: VendorsComponent},
  { path: 'vendors', component: VendorsComponent},
  { path: 'vendors/:vid/products', component: ProductsComponent},
  { path: 'customers', component: CustomersComponent },
  { path: 'customers/:cID', component: CustomerComponent},
  { path: 'metrics', component: MetricsComponent},
  { path: 'orders', component: OrdersComponent},
  { path: 'customers/:cID/orders', component: OrdersComponent},
  { path: 'orders/:oID', component: OrderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
