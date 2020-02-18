import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  cartCount: BehaviorSubject<number>;

  constructor() { 
    this.cartCount = new BehaviorSubject(0);
  }

  nextCount(cartCount) {
    this.cartCount.next(cartCount);
  }
}
