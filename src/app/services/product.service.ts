import { ProductModel } from './../models/productModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  controllerUrl : string = `${environment.productApiUrl}`;

  constructor(private httpClient:HttpClient) { }

  getProducts(){
      return this.httpClient.get<ProductModel[]>(this.controllerUrl);
  }
}
