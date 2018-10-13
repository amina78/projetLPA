import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { RouterModule, Routes } from '@angular/router';
import { PizzaDetailComponent }  from '../pizza-detail/pizza-detail.component';
import { PizzaListComponent }  from '../pizza-list/pizza-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/pizzas', pathMatch: 'full' },
  { path: 'pizzas', component: PizzaListComponent },
  { path: 'pizzas/:id', component: PizzaDetailComponent },

]
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
