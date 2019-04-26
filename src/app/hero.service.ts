import { Injectable } from '@angular/core';
import { Hero } from './entities/Hero';
import { HEROES } from './entities/mock-heroes';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  getHeroes(): Observable<Hero[]> {

    return of(HEROES);
  }
}
