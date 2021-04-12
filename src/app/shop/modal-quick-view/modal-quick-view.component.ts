import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/products';
import { CartService } from 'src/app/services/cart.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-modal-quick-view',
  templateUrl: './modal-quick-view.component.html',
  styleUrls: ['./modal-quick-view.component.css']
})
export class ModalQuickViewComponent implements OnInit {

  @Input() products : Product[] = [];
  prefUrlImage = `${environment.prefUrlImage}`;

  constructor(private cartService : CartService) { }

  ngOnInit(): void {
  }

  addToCart(product:Product){
    this.cartService.addProductToCard(product);

  }

}
