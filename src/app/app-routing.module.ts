import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Las rutas se ejecutan por orden de definición
const routes: Routes = [
  //{path: 'laruta', component: LuciaComponent},
  { path: 'products', loadChildren: () => import('./pages/products/products.module').then(m => m.ProductsModule) },
  { path: 'checkout', loadChildren: () => import('./pages/checkout/checkout.module').then(m => m.CheckoutModule) },
  //{path: '**', component:LuciaComponent },
  //Para responses por code 404:
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
