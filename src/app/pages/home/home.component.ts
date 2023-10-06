import { Component, OnInit, inject } from '@angular/core';

import{GamesService} from '../../data/games.service'
import { dataGame } from 'src/app/data/dataGame';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
	games:dataGame[] = []
	gamesService: GamesService = inject(GamesService);
	imagesB:string[]= []
	imagesC:string[] = []

  constructor() {
		this.games = this.gamesService.getGames();
		this.imagesB = this.gamesService.getImageB();
		this.imagesC = this.gamesService.getImageC();
	 }
  ngOnInit(): void {
  }

}
