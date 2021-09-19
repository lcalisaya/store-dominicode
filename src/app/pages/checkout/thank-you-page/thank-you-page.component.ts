import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-thank-you-page',
  template: `<div class="container">
              <h1 class="title">Thank You!</h1>
              <p class="content">Your order in on the way!</p>
              <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti amet non molestiae porro odit illum sapiente possimus totam aspernatur? Excepturi impedit, earum dolorem error possimus quia cumque. Id, tenetur autem.
              </p>
            </div>`,
  styleUrls: ['./thank-you-page.component.scss']
})
export class ThankYouPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
