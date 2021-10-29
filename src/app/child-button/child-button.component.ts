import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ChildSandbox } from '../child.sandbox';

@Component({
  selector: 'app-child-button',
  templateUrl: './child-button.component.html',
  styleUrls: ['./child-button.component.scss'],
})
export class ChildButtonComponent implements OnInit {
  title = 'vertical';

  @Output() press = new EventEmitter<number>();

  constructor(private childSandbox: ChildSandbox) {}

  ngOnInit(): void {
    console.log('started');

    if (this.title === 'vertical') {
      this.title = 'vertical front end';
    } else {
      this.title = 'vertical back end';
    }
  }

  onClick(id: number): void {
    this.childSandbox.subject.next(id);
  }

  onPress(id: number): void {
    this.press.emit(id);
  }
}
