import {Component, OnInit} from 'angular2/core';
import {Router, RouteParams, CanDeactivate, ComponentInstruction} from 'angular2/router';

import {CrisisService} from '../../services/crisis.service';
import {ConfirmDialogService} from '../../services/confirm-dialog.service';
import {Crisis} from '../../models/crisis';

@Component({
  templateUrl: 'app/components/crisis-detail/crisis-detail.html',
})

export class CrisisDetailComponent {

  crisis: Crisis;
  editName: string;

  constructor(
    private service: CrisisService,
    private dialog: ConfirmDialogService,
    private router: Router,
    private routeParams: RouteParams
  ) { }

  ngOnInit() {
    const id = parseInt(this.routeParams.get('id'), 10);
    this.service.getCrisis(id).then(crisis => {
      if (crisis) {
        this.crisis = crisis;
        this.editName = crisis.name;
      } else {
        // not found
        this.gotoCrises();
      }
    });
  }

  routerCanDeactivate(next: ComponentInstruction, prev: ComponentInstruction): any {
    if (this.crisis && this.crisis.name !== this.editName) {
      // ページ離脱の警告を表示する
      return this.dialog.confirm('Discard changes?');
    } else {
      // [MEMO] navigate(true)を返すとroutingが完了する
      return true;
    }
  }

  save() {
    this.crisis.name = this.editName;
    this.gotoCrises()
  }

  cancel() {
    this.editName = this.crisis.name;
    this.gotoCrises()
  }

  gotoCrises() {
    const crisisId = this.crisis ? this.crisis.id : null;
    // [MEMO] routingの設定にないパラメータは、このようになる => /crisis-center/;id=4;foo=foo
    this.router.navigate(['CrisisCenter', {
      id: crisisId,
      foo: 'foo'
    }])
  }

}