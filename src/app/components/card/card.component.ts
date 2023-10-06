import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
	@Input()
	gameName:string = ""
	@Input()
	gameImage:string = ""
	@Input()
	gameLabel:string=""
	@Input()
	gamePercentage:string=""
	@Input()
	gamePrice:string = ""
	@Input()
	gamePriceBefore:string = ""

  constructor() { }

  ngOnInit(): void {
  }

}
