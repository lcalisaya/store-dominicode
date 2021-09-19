import { ShoppingCartService } from 'src/app/shared/services/shopping-cart.service';
import { Product } from './../products/interfaces/product.interface';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { delay, switchMap, tap } from 'rxjs/operators';
import { DataService } from 'src/app/shared/services/data.service';
import { Store } from 'src/app/shared/interfaces/store.interface';
import { Details } from 'src/app/shared/interfaces/order.interface';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  model = {
    name: "",
    store: "",
    shippingAddress: "",
    city: ""
  };

  isDelivery = true;

  stores: Store[] = [];

  cart: Product[] = [];

  constructor(
    private dataSrv: DataService, 
    private shoppingCartSrv: ShoppingCartService,
    private router: Router) { }

  ngOnInit(): void {
    this.getStores();
    this.getDataCart();
    this.prepareDetails();
  }

  onpickupordelivery(value: boolean): void {
    this.isDelivery = value;
  }

  onSubmit({value: formData}: NgForm): void{
    //Recuperamos los valores del formulario en value
    const data = {
      ... formData,
      date: this.getCurrentDate(),
      isDelivery: this.isDelivery
    }

    this.dataSrv.saveOrder(data)
    .pipe(
      tap(res => console.log('order ->', res)),
      switchMap(({ id: orderId }) => {
        const details = this.prepareDetails();
        return this.dataSrv.saveDetailsOrder({ details, orderId });
      }),
      tap(() => this.shoppingCartSrv.resetCart()),
      delay(2000),
      tap(() => this.router.navigate(['/checkout/thank-you-page']))
    )
    .subscribe();
  }

  private getStores():void {
    this.dataSrv.getStores()
    .pipe(
      tap((stores: Store[]) => this.stores = stores)
    )
    .subscribe()
  }

  private getCurrentDate(): string{
    return new Date().toLocaleDateString();
  }

  private prepareDetails(): Details[] {
    const details: Details[] = [];
    this.cart.forEach((product: Product) => {
      const {id:productId, name:productName, qty:quantity, stock} = product;
      details.push({productId, productName, quantity});
    })
    return details;
  }

  private getDataCart(): void{
    this.shoppingCartSrv.cartAction$.pipe(
      tap((products: Product[]) => this.cart = products)
    )
    .subscribe()
  }

}
