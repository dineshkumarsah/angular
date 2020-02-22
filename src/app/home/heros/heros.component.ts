import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROS } from '../herolist';
import {Router} from '@angular/router'

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {
  
  heros = HEROS;
  sel: Hero;
  constructor( public routes:Router) { }

  selectedHero(hero: Hero) {
    //this.sel = hero;
    this.routes.navigate(['home/hero',hero.id,hero.name]);
  }
  addNew(){
    this.routes.navigate(["/home/DataForm"], { queryParams: { order: 'popular' } });

  }

  ngOnInit() {}

}
