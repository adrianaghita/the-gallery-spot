import { Component } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css'],
})
export class CartPageComponent {
  constructor(private cartService: CartService) {}
  items = this.cartService.getItems();

  getTotal(items: Array<Product>) {
    return this.cartService.getTotal(items);
  }

  increaseQ(product: any) {
    product.quantity += 1;
  }

  decreaseQ(product: any) {
    if (product.quantity > 0) {
      product.quantity -= 1;
    }
  }
}
