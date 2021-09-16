import { ShoppingCartService } from 'src/app/shared/services/shopping-cart.service';
import { Product } from './interfaces/product.interface';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from './services/products.service';
import { tap } from 'rxjs/operators'; 
@Component({
  selector: 'app-products',
  template: `
              <section class="products">
                <app-product 
                    (addToCartClick) = "agregarACarrito($event)"
                    [miProducto]="producto" 
                    *ngFor="let producto of products"
                >
                </app-product>
            </section>
             `,
  styleUrls: ['./products.component.scss']
})

export class ProductsComponent implements OnInit {
  products!: Product[];
  constructor(private productsService: ProductsService, private shoppingCartService: ShoppingCartService ) { }

  ngOnInit(): void {
    this.productsService.getProducts()
      .pipe(
        tap((products: Product[]) => this.products = products)
      )
      .subscribe();
  }

  agregarACarrito(product: Product): void {
    this.shoppingCartService.updateCart(product);
  }

}

