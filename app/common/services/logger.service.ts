import {Injectable} from 'angular2/core';

@Injectable()
export class Logger {

  constructor() { }

  log(message: any) {
    console.log(message);
  }
  error(message: any) {
    console.error(message);
  }
  warn(message: any) {
    console.warn(message);
  }

}