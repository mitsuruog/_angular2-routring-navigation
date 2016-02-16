import {Component} from 'angular2/core';
import {RouteConfig, RouterOutlet} from 'angular2/router';

import {CrisisListComponent} from '../crisis-list/crisis-list.component';
import {CrisisDetailComponent} from '../crisis-detail/crisis-detail.component';
import {CrisisService} from '../../services/crisis.service';
import {ConfirmDialogService} from '../../services/confirm-dialog.service';

@Component({
  templateUrl: 'app/components/crisis-container/crisis-container.html',
  directives: [RouterOutlet],
  providers: [CrisisService, ConfirmDialogService]
})

@RouteConfig([{
  path: '/',
  name: 'CrisisCenter',
  component: CrisisListComponent,
  useAsDefault: true
}, {
  path: '/:id',
  name: 'CrisisDetail',
  component: CrisisDetailComponent
}])

export class CrisisContainerComponent { }