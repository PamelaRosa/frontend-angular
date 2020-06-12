import { EcommerceService } from './ecommerce/ecommerce/services/ecommerce.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [EcommerceService]
})
export class AppComponent {
  title = 'teste-pamela';
}
