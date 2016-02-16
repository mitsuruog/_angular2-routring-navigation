import {Component, OnInit} from 'angular2/core';
import {Router, RouteParams} from 'angular2/router';

import {HeroService} from '../../services/hero.service';
import {Hero} from '../../models/hero';

@Component({
  templateUrl: 'app/components/hero-detail/hero-detail.html',
  providers: [HeroService]
})

export class HeroDetailComponent {

  hero: Hero;

  constructor(
    private service: HeroService,
    private router: Router,
    private routeParams: RouteParams
  ) {
    let id: number = parseInt(this.routeParams.get('id'), 10);
    this.service.getHero(id).then(hero => this.hero = hero);
  }

  gotoHeroes() {
    const id = this.hero || null;
    this.router.navigate(['Heroes', {
      id: id,
      bar: 'bar'
    }]);
  }

}