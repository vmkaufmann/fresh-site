import { Component, inject } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  imports: [CurrencyPipe],
  templateUrl: './cart.html',
  styleUrl: './cart.css',
})
export class Cart {
  private readonly cartService = inject(CartService);

  readonly items = this.cartService.items;
  readonly count = this.cartService.count;
  readonly total = this.cartService.total;

  remove(name: string): void {
    this.cartService.remove(name);
  }

  changeQuantity(name: string, quantity: number): void {
    this.cartService.setQuantity(name, quantity);
  }

  clear(): void {
    this.cartService.clear();
  }
}
