import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ShopComponent } from './shop/shop.component';
import { ProductsComponent } from './shop/products/products.component';
import { SingleProductComponent } from './shop/single-product/single-product.component';
import { CartComponent } from './shop/cart/cart.component';
import { ContactComponent } from './contact/contact.component';
import { NotFonndComponent } from './not-fonnd/not-fonnd.component';
import { ModalAddToCartComponent } from './shop/modal-add-to-cart/modal-add-to-cart.component';
import { ModalQuickViewComponent } from './shop/modal-quick-view/modal-quick-view.component';

const routes: Routes = [
  {path : 'home', component: HomeComponent},
  {path : 'shop', component: ShopComponent},
  {path : 'cart', component: CartComponent},
  {path : 'sigle-tableau/:id', component: SingleProductComponent},
  {path : 'login', component: LoginComponent},
  {path : 'contact', component: ContactComponent},
  {path : 'register', component: RegisterComponent},
  {path : 'notFound', component: NotFonndComponent},
  {path : '', component: ShopComponent},
  {path : '**', redirectTo: 'notfound', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ShopComponent,
    ProductsComponent,
    SingleProductComponent,
    CartComponent,
    NotFonndComponent,
    ModalAddToCartComponent,
    ModalQuickViewComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
