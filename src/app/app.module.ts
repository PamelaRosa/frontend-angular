import { EcommerceService } from './ecommerce/ecommerce/services/ecommerce.service';
import { OrdersComponent } from './ecommerce/ecommerce/orders/orders.component';
import { ShoppingCartComponent } from './ecommerce/ecommerce/shopping-cart/shopping-cart.component';
import { ProductsComponent } from './ecommerce/ecommerce/products/products.component';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {EcommerceComponent} from './ecommerce/ecommerce.component';


@NgModule({
    declarations: [
        AppComponent,
        EcommerceComponent,
        ProductsComponent,
        ShoppingCartComponent,
        OrdersComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [EcommerceService],
    bootstrap: [AppComponent]
})
export class AppModule {
    
}