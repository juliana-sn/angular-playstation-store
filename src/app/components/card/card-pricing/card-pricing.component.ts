import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-pricing',
  templateUrl: './card-pricing.component.html',
  styleUrls: ['./card-pricing.component.css']
})
export class CardPricingComponent implements OnInit {
	@Input()
	gameName:string = ""
	@Input()
	gamePriceBefore:string = ""
	@Input()
	gamePrice:string = ""
	@Input()
	gamePercentage:string=""

  constructor() { }

  ngOnInit(): void {
  }

}
