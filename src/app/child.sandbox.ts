import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ChildSandbox {
  subject = new Subject<number>();

  constructor() {}
}
