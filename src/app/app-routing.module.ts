import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './helpers/auth.guard';
import { ProductComponent } from './product/product.component';
import { ShopComponent } from './shop/shop.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {
    path : 'product',
    component : ProductComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'shop',
    component : ShopComponent,
    canActivate: [AuthGuard]
  },
  {
    path : 'cart',
    component : CartComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '',
    component : LoginComponent
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
