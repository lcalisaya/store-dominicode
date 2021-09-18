import { ShoppingCartService } from 'src/app/shared/services/shopping-cart.service';
import { Product } from './../products/interfaces/product.interface';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { switchMap, tap } from 'rxjs/operators';
import { DataService } from 'src/app/shared/services/data.service';
import { Store } from 'src/app/shared/interfaces/store.interface';
import { Details } from 'src/app/shared/interfaces/order.interface';

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

  constructor(private dataSrv: DataService, private shoppingCartSrv: ShoppingCartService) { }

  ngOnInit(): void {
    this.getStores();
    this.getDataCart();
    this.prepareDetails();
  }

  onpickupordelivery(value: boolean): void {
    this.isDelivery = value;
  }

  onSubmit({value: formData}: ngForm): void{
    //Recuperamos los valores del formulario en value
    const data = {
      ... formData,
      date: this.getCurrentDate(),
      pickup: this.isDelivery
    }

    this.dataSrv.saveOrder(data).pipe(
      tap(res => console.log('order ->', res)),
      switchMap( (order) =>{
        const details = this.prepareDetails();
        const orderId = order.id;
        return this.dataSrv.saveDetailsOrder({details, orderId}); 
      }),
      tap(res => console.log('finish ->', res))
    ).subscribe();
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
    this.cart.forEach(res => {
      

      
    })
    return details
  }

  private getDataCart(): void{
    this.shoppingCartSrv.cartAction$.pipe(
      tap((products: Product[]) => this.cart = products)
    )
    .subscribe()
  }

}
