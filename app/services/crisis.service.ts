import {Injectable} from 'angular2/core';

import {Crisis} from '../models/crisis';

const CRISES = [
  new Crisis(1, 'Princess Held Captive'),
  new Crisis(2, 'Dragon Burning Cities'),
  new Crisis(3, 'Giant Asteroid Heading For Earth'),
  new Crisis(4, 'Release Deadline Looms')
];

const crisisPromise = Promise.resolve(CRISES);

@Injectable()
export class CrisisService {

  static nextCrisisId = 100;

  getCrises(): Promise<Crisis[]> {
    return crisisPromise;
  }

  getCrisis(id: number | string): Promise<Crisis> {
    return crisisPromise
      .then(crises => crises.filter(crisis => crisis.id === +id)[0]);
  }

  addCrisis(name: string) {
    name = name.trim();
    if (name) {
      const crisis = new Crisis(CrisisService.nextCrisisId++, name);
      crisisPromise.then(crises => crises.push(crisis));
    }
  }

}