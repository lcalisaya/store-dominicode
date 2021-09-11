import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from './../interfaces/product.interface';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() miProducto!: Product;
  @Output() addToCartClick = new EventEmitter<Product>();

  constructor() { }

  ngOnInit(): void {
  }

  clickButton(): void {
    //console.log("se hizo un click", this.miProducto);
    //Se hace una emisión
    this.addToCartClick.emit(this.miProducto);

  }
}
