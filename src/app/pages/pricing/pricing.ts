import { Component, inject } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { CartService, Product } from '../../services/cart.service';

interface JuiceVariety {
  name: string;
  price: number;
}

@Component({
  selector: 'app-pricing',
  imports: [CurrencyPipe],
  templateUrl: './pricing.html',
  styleUrl: './pricing.css',
})
export class Pricing {
  private readonly cart = inject(CartService);

  readonly varieties: JuiceVariety[] = [
    { name: 'Lemon', price: 12.0 },
    { name: 'Lime', price: 13.0 },
    { name: 'Orange', price: 9.5 },
    { name: 'Blood Orange', price: 16.0 },
    { name: 'Grapefruit', price: 11.0 },
    { name: 'Mandarin', price: 12.5 },
    { name: 'Yuzu', price: 48.0 },
    { name: 'Bergamot', price: 22.0 },
    { name: 'Kumquat', price: 28.0 },
    { name: 'Pomelo', price: 14.0 },
  ];

  addToCart(variety: JuiceVariety): void {
    const product: Product = { name: variety.name, pricePerLiter: variety.price };
    this.cart.add(product);
  }
}
