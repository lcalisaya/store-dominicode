import { Component, OnInit } from '@angular/core';

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

  stores = [
    {
      "id": 4,
      "name": "Luna en Escorpio",
      "address": "Carlos Casares 8932",
      "city": "Gregorio de Laferrere",
      "openingHours": "10:00 - 14:00 y 17:00 - 20:30"
    },
    {
      "id": 5,
      "name": "La Tierra redonda en el Siglo XXI",
      "address": "Av. Libertad 1199",
      "city": "Santiago del Estero",
      "openingHours": "10:00 - 14:00 y 17:00 - 20:30"
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onpickupordelivery(value: boolean): void {
    console.log(value);
  }

}
