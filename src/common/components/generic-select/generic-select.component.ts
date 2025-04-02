import { Component, input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatFormField, MatLabel, MatOption, MatSelect } from '@angular/material/select';

export interface GenericSelectI {
  value: string;
  viewValue: string;
}

@Component({
  imports: [MatFormField, MatLabel, MatOption, MatSelect, ReactiveFormsModule],
  selector: 'app-generic-select',
  templateUrl: './generic-select.component.html',
})
export class GenericSelectComponent {
  label = input.required<string>();
  control = input.required<FormControl>();
  items = input.required<GenericSelectI[]>();
}
