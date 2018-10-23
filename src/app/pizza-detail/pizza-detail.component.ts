import { Component, OnInit } from '@angular/core';
import { PizzaService } from '../pizza.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Pizza } from '../pizza';
import { PayPalConfig, PayPalEnvironment, PayPalIntegrationType } from 'ngx-paypal';
 
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

    public payPalConfig?: PayPalConfig;
  ngOnInit() : void  {
this.getPizza()
this.initConfig();
  }

  private initConfig(): void {
    this.payPalConfig = new PayPalConfig(PayPalIntegrationType.ClientSideREST, PayPalEnvironment.Sandbox, {
      commit: true,
      client: {
        sandbox: 'AW0pdFG3D7OczfsCQ03ZWB9U-xwhfdAs3Yb_dTYbnCJlh_ZoOAXHB1KloXwQXkfKK_r-7vmWYdTYJPOms'
      },
      button: {
        label: 'paypal',
      },
      onPaymentComplete: (data, actions) => {
        console.log('OnPaymentComplete');
      },
      onCancel: (data, actions) => {
        console.log('OnCancel');
      },
      onError: (err) => {
        console.log('OnError');
      },
      transactions: [{
        amount: {
          currency: 'USD',
          total: 9
        }
      }]
    });
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
