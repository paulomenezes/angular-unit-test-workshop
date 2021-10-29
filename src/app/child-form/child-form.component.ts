import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ChildSandbox } from '../child.sandbox';

@Component({
  selector: 'app-child-form',
  templateUrl: './child-form.component.html',
  styleUrls: ['./child-form.component.scss'],
})
export class ChildFormComponent implements OnInit {
  @Input() requiredFields: string[] = [];
  @Input() person!: { name: string; age: number };

  formGroup = new FormGroup({
    name: new FormControl(''),
  });

  constructor(private childSandbox: ChildSandbox) {}

  ngOnInit(): void {
    this.childSandbox.subject.subscribe((data) => {
      this.formGroup.controls.name.setValue(data);
    });

    this.formGroup.controls[this.requiredFields[0]].setValidators([
      Validators.required,
    ]);
  }
}
