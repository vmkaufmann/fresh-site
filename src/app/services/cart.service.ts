import { Injectable, computed, signal } from '@angular/core';

export interface Product {
  name: string;
  pricePerLiter: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

@Injectable({ providedIn: 'root' })
export class CartService {
  private readonly itemsSignal = signal<CartItem[]>([]);

  readonly items = this.itemsSignal.asReadonly();

  readonly count = computed(() =>
    this.itemsSignal().reduce((sum, item) => sum + item.quantity, 0),
  );

  readonly total = computed(() =>
    this.itemsSignal().reduce(
      (sum, item) => sum + item.quantity * item.product.pricePerLiter,
      0,
    ),
  );

  add(product: Product): void {
    this.itemsSignal.update((items) => {
      const existing = items.find((i) => i.product.name === product.name);
      if (existing) {
        return items.map((i) =>
          i.product.name === product.name ? { ...i, quantity: i.quantity + 1 } : i,
        );
      }
      return [...items, { product, quantity: 1 }];
    });
  }

  remove(productName: string): void {
    this.itemsSignal.update((items) => items.filter((i) => i.product.name !== productName));
  }

  setQuantity(productName: string, quantity: number): void {
    if (quantity <= 0) {
      this.remove(productName);
      return;
    }
    this.itemsSignal.update((items) =>
      items.map((i) => (i.product.name === productName ? { ...i, quantity } : i)),
    );
  }

  clear(): void {
    this.itemsSignal.set([]);
  }
}
