import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  model = {
    name: "lorena",
    store: "",
    shippingAddress: "",
    city: ""
  }
  constructor() { }

  ngOnInit(): void {
  }

  onpickupordelivery(value: boolean): void {
    console.log(value);
  }

}
