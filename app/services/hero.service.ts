import {Injectable} from 'angular2/core';

import {Hero} from '../models/hero';

const HEROES: Hero[] = [
  new Hero(11, 'Mr. Nice'),
  new Hero(12, 'Narco'),
  new Hero(13, 'Bombasto'),
  new Hero(14, 'Celeritas'),
  new Hero(15, 'Magneta'),
  new Hero(16, 'RubberMan')
];

const heroPromise = Promise.resolve(HEROES);

@Injectable()
export class HeroService {

  getHeroes(): Promise<Hero[]> {
    return heroPromise;
  }

  getHero(id: number): Promise<Hero> {
    return heroPromise
      .then(heroes => heroes.filter(hero => hero.id === +id)[0]);
  }

}