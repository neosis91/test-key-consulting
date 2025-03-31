import {Component} from '@angular/core';
import {GenericInputComponent} from '../../../common/components/generic-input/generic-input.component';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';

export interface ProjectI {
  id?: FormControl<number | null>;
  name: FormControl<string | null>;
  user: FormControl<string | null>;
  contract: FormControl<string | null>;
}

@Component({
  selector: 'app-form-projet',
  imports: [
    GenericInputComponent,
    ReactiveFormsModule
  ],
  templateUrl: './form-projet.component.html',
  styleUrl: './form-projet.component.css'
})
export class FormProjetComponent {
  projectFormGroup = new FormGroup<ProjectI>({
    name: new FormControl(null, [Validators.required]),
    user: new FormControl(null, [Validators.required]),
    contract: new FormControl(null),
  });

}
