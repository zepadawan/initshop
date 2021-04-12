import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Result } from '../models/result';
import { Product } from '../models/products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  api = environment.api;
  products : Product[] = [];
  productSubject = new Subject<Product[]>();

  constructor(private http: HttpClient) {
    this.getProductsFromServer();
  }

  emitProducts(){
    this.productSubject.next(this.products);
  }

  getProductsFromServer(){
    const url =`${environment.api+'products?API_KEY='+environment.api_key}`;
    this.http.get(url).subscribe(
      (dataProducts:Result)=>{
         if (dataProducts.status === 200){
           this.products = dataProducts.result;
           this.emitProducts();
         }else{
           console.log("Error : "+ dataProducts.message);
         };
        }
      )
    }
}


