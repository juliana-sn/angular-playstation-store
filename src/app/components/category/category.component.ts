import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
	@Input()
	imageCategory:string = ""
  constructor() { }

  ngOnInit(): void {
  }

}
