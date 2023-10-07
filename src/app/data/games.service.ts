import { Injectable } from '@angular/core';
import { dataGame } from './dataGame';

@Injectable({
  providedIn: 'root'
})
export class GamesService {
	gamesList = [
		{
			image:"assets/elden-ring.png",
			name:"ELDEN RING PS4 & PS5",
			label:"PS4 | PS5",
			percentage:"34%",
			priceBefore:"R$299,90",
			price:"R$197,93",
		},
		{
			image:"assets/crash4.jpg",
			name:"Crash Bandicoot™ 4: It's About Time",
			label:"PS4 | PS5",
			percentage:"67%",
			priceBefore:"R$249,90",
			price:"R$82,46",
		},
		{
			image:"assets/hzd.jpg",
			name:"Horizon Zero Dawn: Complete Edition",
			label:"PS4",
			percentage:"50%",
			priceBefore:"R$99,50",
			price:"R$49,75",
		},
		{
			image:"assets/detroid.png",
			name:"Detroit: Become Human Digital Deluxe Edition",
			label:"PS4",
			percentage:"50%",
			priceBefore:"R$149,50",
			price:"R$74,75",
		},
		{
			image:"assets/uncharted.png",
			name:"UNCHARTED: Coleção Legado dos Ladrões",
			label:"PS5",
			percentage:"60%",
			priceBefore:"R$249,50",
			price:"R$99,80",
		},
		{
			image:"assets/miles.png",
			name:"Marvel's Spider-Man: Miles Morales PS4 & PS5",
			label:"PS4 | PS5",
			percentage:"10%",
			priceBefore:"R$249,50",
			price:"R$224,55",
		}
	]

	imagesC:string[] = [
		"assets/itens/c1.png",
		"assets/itens/c2.png",
		"assets/itens/c3.png",
		"assets/itens/c4.png",
		"assets/itens/c5.png",
		"assets/itens/c6.png",
		"assets/itens/c7.png",
		"assets/itens/c8.png"
	]

	imagesB:string[]= [
	"assets/itens/banner-1.png",
	"assets/itens/banner-2.png",
	"assets/itens/banner-3.png"
	]

  constructor() { }

	getGames() :dataGame[] {
		return this.gamesList;
	}

	getImageB():string[]{
		return this.imagesB;
	}

	getImageC():string[]{
		return this.imagesC;
	}
	}
