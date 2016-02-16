import {Injectable} from 'angular2/core';

@Injectable()
export class ConfirmDialogService {
  confirm(message?: string): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      resolve(window.confirm(message || 'It\'s OK?'));
    });
  }
}