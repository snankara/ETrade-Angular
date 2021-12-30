import { CartItems } from './../models/cartItems';
import { ProductModel } from './../models/productModel';
import { Injectable } from '@angular/core';
import { CartItem } from '../models/cartItem';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  addToCart(product: ProductModel) {
    let item = CartItems.find(i => i.product.id === product.id)

    if (item) {
      item.quantity += 1
      item.totalPrice += item.product.price
    } else {
      let cartItem = new CartItem()
      cartItem.product = product;
      cartItem.quantity = 1
      cartItem.totalPrice = product.price
      CartItems.push(cartItem);
    }
  }

  getCartItems() {
    return CartItems;
  }
}
