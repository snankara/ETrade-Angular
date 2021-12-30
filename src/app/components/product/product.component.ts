import { ToastrService } from 'ngx-toastr';
import { CartService } from './../../services/cart.service';
import { ProductModel } from './../../models/productModel';
import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products : ProductModel[]

  constructor(private productService: ProductService, private cartService: CartService, private toastrService: ToastrService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(){
    this.productService.getProducts().subscribe(res => {
      this.products = res;
    })
  }

  addToCart(product: ProductModel) {
    this.cartService.addToCart(product)
    this.toastrService.success("Sepete Eklendi.", "Başarılı !")
  }

}
