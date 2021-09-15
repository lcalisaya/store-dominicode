import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `<mat-toolbar>
              <span>Mi Tienda Online</span>
              <span class="spacer"></span>
              <app-cart></app-cart>
            </mat-toolbar>
            `,
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
