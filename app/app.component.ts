import {Component, OnInit} from 'angular2/core';
import {RouteConfig, RouterOutlet} from 'angular2/router';

import {CrisisContainerComponent} from './components/crisis-container/crisis-container.component';
import {HeroDetailComponent} from './components/hero-detail/hero-detail.component';
import {HeroListComponent} from './components/hero-list/hero-list.component';

import {Logger} from './common/services/logger.service';

@Component({
  selector: 'my-app',
  template: `
    <h1>Routing & Navigaton</h1>
    <router-outlet></router-outlet>
  `,
  directives: [RouterOutlet],
  providers: [Logger]
})

@RouteConfig([
  {
    path: '/crisis-center/...',
    name: 'CrisisCenter',
    component: CrisisContainerComponent,
    useAsDefault: true
  },
  {
    path: '/heroes',
    name: 'Heroes',
    component: HeroListComponent
  },
  {
    path: '/heroes/:id',
    name: 'Hero',
    component: HeroDetailComponent
  }
])

export class AppComponent {

  constructor(private logger: Logger) { }

  ngOnInit() {
    this.logger.log('Alo!! Alo!!');
  }

}