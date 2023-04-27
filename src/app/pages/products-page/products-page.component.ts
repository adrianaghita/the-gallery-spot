import { AnimateTimings } from '@angular/animations';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css'],
})
export class ProductsPageComponent {
  @Input()
  product: Product[] = [
    {
      id: 1,
      title: 'Deja Vu',
      price: 120,
      description: 'Created by ÉMILE SÉGUIN in Vaudreuil-Dorion, Canada.',
      dimensions: '16 x 20',
      image: 'assets/images/1.jpg',
      quantity: 0,
    },

    {
      id: 2,
      title: 'Amore e Psiche',
      price: 220,
      description: 'Created by Daniele D’Andreti in Louvre, Paris, France.',
      dimensions: '24 x 24',
      image: 'assets/images/2.jpg',
      quantity: 0,
    },

    {
      id: 3,
      title: 'Empire State Building',
      price: 180,
      description: 'Created by Osman Rana in New York,  SUA.',
      dimensions: '18 x 24',
      image: 'assets/images/3.jpg',
      quantity: 0,
    },

    {
      id: 4,
      title: 'Paris in Black and White',
      price: 95,
      description: 'Created by Barry Talley in Paris, France.',
      dimensions: '12 x 16',
      image: 'assets/images/4.jpg',
      quantity: 0,
    },

    {
      id: 5,
      title: 'La Venaria Reale',
      price: 90,
      description: 'Created by Cristina Gottardi in Venaria Reale, Italy.',
      dimensions: '12 x 16',
      image: 'assets/images/5.jpg',
      quantity: 0,
    },
  ];

  constructor(private root: ActivatedRoute, private cartService: CartService) {}

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert('Item added to the cart!');
    product.quantity++;
  }
}
