import { Injectable } from '@angular/core';
import { Hero } from './entities/Hero';
import { HEROES } from './entities/mock-heroes';
import { Observable, of } from 'rxjs';
import { MessagesService } from './messages.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {


  constructor(private messageService: MessagesService) { }

  getHero(id: number): Observable<Hero> {
    // TODO: send the message _after_ fetching the hero
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(hero  => hero.id === id));
  }

  //an asynchronous operation returning an Observable
  getHeroes(): Observable<Hero[]> {

    this.messageService.add("HeroService: Heroes fetched successfully!");
    return of(HEROES);
  }
}
