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


  //an asynchronous operation returning an Observable
  getHeroes(): Observable<Hero[]> {

    this.messageService.add("HeroService: Heroes fetched successfully!");
    return of(HEROES);
  }
}
