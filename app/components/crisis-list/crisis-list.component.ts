import {Component, OnInit} from 'angular2/core';
import {Router, RouteParams} from 'angular2/router';

import {CrisisService} from '../../services/crisis.service';
import {Crisis} from '../../models/crisis';

@Component({
  templateUrl: 'app/components/crisis-list/crisis-list.html',
  providers: [CrisisService]
})

export class CrisisListComponent {

  crises: Crisis[];
  private isSelectedId: number;

  constructor(
    private service: CrisisService,
    private router: Router,
    private routeParam: RouteParams
  ) {
    this.isSelectedId = parseInt(routeParam.get('id'), 10);
  }

  ngOnInit() {
    this.service.getCrises().then(crises => this.crises = crises);
  }

  handleSelect(crisis: Crisis) {
    this.router.navigate(['CrisisDetail', {
      id: crisis.id
    }]);
  }

  isSelected(crisis: Crisis): boolean {
    return this.isSelectedId === crisis.id;
  }

}