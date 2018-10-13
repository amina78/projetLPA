import { Component, OnInit } from '@angular/core';
import { PizzaService } from '../pizza.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Pizza } from '../pizza';
@Component({
  selector: 'app-pizza-detail',
  templateUrl: './pizza-detail.component.html',
  styleUrls: ['./pizza-detail.component.css']
})
export class PizzaDetailComponent implements OnInit {
pizza: Pizza
  constructor( private route: ActivatedRoute,
    private pizzaService: PizzaService,
    private location: Location) { }

  ngOnInit() {
this.getPizza()
  }
  getPizza(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.pizzaService.getPizza(id)
      .subscribe(pizza => this.pizza = pizza);
  }
  goBack(): void {
    this.location.back();
  }
}
