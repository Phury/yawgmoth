import { Injectable } from '@angular/core';
import { LOG_LEVEL } from '../env';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor() { }

  debug(message: any): void {
    if (LOG_LEVEL === 'debug') {
      console.log(message);
    }
  }
}
