import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../entities/Hero';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.css']
})
export class HeroDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() myhero: Hero;


}
