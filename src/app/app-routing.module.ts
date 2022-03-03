import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { ProductDetailsComponent} from './components/product-details/product-details.component';
import { CartComponent } from './components/cart/cart.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { AuthGuard } from './services/auth.guard';
import { AdminComponent } from './components/admin/admin.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { HeaderComponent } from './components/header/header.component';
const routes: Routes = [{path: '' ,component:LoginComponent},
{path: 'products' ,component:ProductsComponent},
{path: 'detail/:id' ,component:ProductDetailsComponent},
{path: 'cart' ,component:CartComponent},
{path: 'login' ,component:LoginComponent},
{path: 'profile' ,component:ProfileComponent},
{path: 'signup' ,component:SignUpComponent},
{path: 'Admin' ,component:AdminComponent,canActivate:[AuthGuard],data: {
  role: 'admin'
}},
{path: 'add' ,component:AddProductComponent},
{path: 'edit' ,component:EditProductComponent},
{ path: '**', redirectTo: '' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
