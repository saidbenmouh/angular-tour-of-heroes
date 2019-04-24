import { Component, OnInit } from '@angular/core';
import { Hero } from '../entities/Hero';
import { HEROES } from '../entities/mock-heroes'; 


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes = HEROES;

  selectedHero: Hero;

  onSelect(hero:Hero) : void {
    this.selectedHero = hero;
    console.log("hello "+hero.name);

  }



  constructor() { }

  ngOnInit() {
  }

}
