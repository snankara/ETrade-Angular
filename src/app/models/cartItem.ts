import { ProductModel } from './productModel';

export class CartItem{
    product:ProductModel;
    quantity:number;
    totalPrice: number;
}