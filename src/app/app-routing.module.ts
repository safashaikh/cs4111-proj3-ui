import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './components/product/product.component';
import { UserComponent } from './components/user/user.component';
import { UserloginComponent } from './components/userlogin/userlogin.component';
import { UsersComponent } from './components/users/users.component';

const routes: Routes = [
  { path: 'products', component: ProductComponent },
  { path: 'userlogin', component: UserloginComponent },
  { path: 'users', component: UsersComponent },
  { path: 'users/:userID', component: UserComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
