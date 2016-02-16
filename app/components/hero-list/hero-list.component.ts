import {Component, OnInit} from 'angular2/core';
import {Router, RouteParams} from 'angular2/router';

import {HeroService} from '../../services/hero.service';
import {Hero} from '../../models/hero';

@Component({
  templateUrl: 'app/components/hero-list/hero-list.html',
  providers: [HeroService]
})

export class HeroListComponent {

  heroes: Hero[];
  private selectedHeroId: number;

  constructor(
    private service: HeroService,
    private router: Router,
    private routeParams: RouteParams
  ) {
    this.selectedHeroId = parseInt(this.routeParams.get('id'), 10);
  }

  ngOnInit() {
    this.service.getHeroes().then(heroes => this.heroes = heroes);
  }

  isSelected(hero: Hero): boolean {
    return this.selectedHeroId === hero.id;
  }

  handleSelect(hero: Hero) {
    this.router.navigate(['Hero', { 
      id: hero.id 
    }]);
  }

}