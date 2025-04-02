import { Component, input } from '@angular/core';
import { MatError, MatFormField, MatInput, MatLabel } from '@angular/material/input';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-generic-input',
  imports: [MatLabel, MatFormField, MatInput, ReactiveFormsModule, MatError],
  templateUrl: './generic-input.component.html',
  styleUrl: './generic-input.component.css',
})
export class GenericInputComponent {
  label = input.required<string>();
  control = input.required<FormControl>();
  type = input<'text' | 'number'>('text');
}
