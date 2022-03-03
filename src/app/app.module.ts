import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { JwtModule } from '@auth0/angular-jwt';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductsComponent } from './components/products/products.component';
import { HeaderComponent } from './components/header/header.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { LoginComponent } from './components/login/login.component';
import { CartComponent } from './components/cart/cart.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { AuthInterceptorService } from './auth-interceptor.service';
import { AuthGuard } from './services/auth.guard';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AdminComponent } from './components/admin/admin.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { AddProductComponent } from './components/add-product/add-product.component';
//export function tokenGetter(){
 // return localStorage.getItem('access_token');
//}
export function tokengetter()
{
  return localStorage.getItem("access_token");
}

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductsComponent,
    HeaderComponent,
    ProductDetailsComponent,
    LoginComponent,
    CartComponent,
    ProfileComponent,
    SignUpComponent,
    AdminComponent,
    EditProductComponent,
    AddProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    JwtModule.forRoot({
      config:{
        tokenGetter:tokengetter,
       
      }
    })],
   
    providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true }],
    bootstrap: [AppComponent]
})
export class AppModule { }
