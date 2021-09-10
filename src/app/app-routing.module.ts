import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LuciaComponent } from './pages/lucia/lucia.component';

//Las rutas se ejecutan por orden de definición
const routes: Routes = [
  {path: 'laruta', component: LuciaComponent},
  //{path: '**', component:LuciaComponent },
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
