import { Component, Input, OnInit, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Product } from './../interfaces/product.interface';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductComponent {
  @Input() miProducto!: Product;
  @Output() addToCartClick = new EventEmitter<Product>();

  clickButton(): void {
    //console.log("se hizo un click", this.miProducto);
    //Se hace una emisión
    this.addToCartClick.emit(this.miProducto);
  }
}

