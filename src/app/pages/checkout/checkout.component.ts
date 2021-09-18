import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
import { DataService } from 'src/app/shared/services/data.service';
import { Store } from 'src/app/shared/interfaces/store.interface';

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

  constructor(private dataSrv: DataService) { }

  ngOnInit(): void {
    this.getStores();
  }

  onpickupordelivery(value: boolean): void {
    this.isDelivery = value;
  }

  onSubmit(): void{
    console.log("guardar");
  }

  private getStores():void {
    this.dataSrv.getStores()
    .pipe(
      tap((stores: Store[]) => this.stores = stores)
    )
    .subscribe()
  }

}
