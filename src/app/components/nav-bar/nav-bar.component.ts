import { Component } from '@angular/core';

import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Product } from 'src/app/models/product.model';

import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent {
  faCartShopping = faCartShopping;

  constructor(private cartService: CartService) {}
  items = this.cartService.getItems();

  getTotal(items: Array<Product>) {
    return this.cartService.getTotal(items);
  }
}
