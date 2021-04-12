import { Injectable } from '@angular/core';
import { EmptyError } from 'rxjs';
import { Cart } from '../models/cart';
import { Product } from '../models/products';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  carts : Cart[]=[];
  cartData = {len:0,cost:0};

  constructor() { }

  addProductToCard(newProduct : Product): void{
    const checkedProduct = this.carts.find(element =>element.product == newProduct)
    if (checkedProduct)
    {
      checkedProduct.number++;
    }
    else
    {
      const newProductToAdd ={
        number : 1,
        product : newProduct
      };
      this.carts.push(newProductToAdd);
    }
    this.updateDataCart();
  }

  deleteFromCart(productToDelete: Product):void{
    const indexProduct = this.carts.findIndex(element => element.product= productToDelete);
    if (indexProduct){
      if(this.carts[indexProduct].number> 1) {
        this.carts[indexProduct].number--
      }else{
        this.carts.splice(indexProduct,1);
      };
      this.updateDataCart();
    }
  }

  updateDataCart(){
    let len = 0;
    let cost = 0;
    this.carts.forEach(element =>{
      len += element.number;
      cost += element.product.price* element.number;
    });
    this.cartData.len = len;
    this.cartData.cost = cost;
    }
  }


