import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  template: `<mat-toolbar>
              <a [routerLink]="['/']"><span>Mi Tienda Online</span></a>
              <span class="spacer"></span>
              <app-cart class="mouseHover" (click)="goToCheckout()"></app-cart>
            </mat-toolbar>
            `,
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToCheckout(): void {  
    this.router.navigate(['/checkout']);
  }

}
