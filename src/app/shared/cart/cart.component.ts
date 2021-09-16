import { Component } from "@angular/core";
import { ShoppingCartService } from 'src/app/shared/services/shopping-cart.service';

@Component({
    selector: 'app-cart',
    template: `
    <ng-container *ngIf = "{ quantity: quantity$ | async, total: totalPrice$ | async} as dataCart ">
        <ng-container *ngIf="dataCart.total">
            <mat-icon>add_shopping_cart</mat-icon>
            {{ dataCart.total | currency }}
            ({{ dataCart.quantity }} unidades)
        </ng-container>
    </ng-container>
    `
})

export class CartComponent {
    quantity$ = this.shoppingCartService.quantityAction$;
    totalPrice$ = this.shoppingCartService.totalAction$;
    cart$ = this.shoppingCartService.cartAction$;  

    constructor(private shoppingCartService: ShoppingCartService){ }
     
}