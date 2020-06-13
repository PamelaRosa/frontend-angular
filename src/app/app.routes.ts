import { EcommerceComponent } from './ecommerce/ecommerce.component';
import { ProductsComponent } from './ecommerce/ecommerce/products/products.component';
import { AppComponent } from './app.component';
import {Routes} from '@angular/router'
export const ROUTES: Routes = [
    {path: '', component: EcommerceComponent},
    {path: 'products', component: ProductsComponent},
  
    ]