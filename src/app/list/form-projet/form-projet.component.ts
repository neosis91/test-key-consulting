import {Component, input, OnInit} from '@angular/core';
import {GenericInputComponent} from '../../../common/components/generic-input/generic-input.component';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {Projet} from '../list.entities';

export interface ProjectI {
  id?: FormControl<number | null>;
  name: FormControl<string | null>;
  user: FormControl<string | null>;
  contract: FormControl<number | null>;
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
export class FormProjetComponent implements OnInit {
  projet = input<Projet>()
  projectFormGroup: FormGroup<ProjectI> | undefined;

  ngOnInit() {
    const projet = this.projet();
    this.projectFormGroup = new FormGroup<ProjectI>({
      name: new FormControl(projet ? projet.name : null, [Validators.required]),
      user: new FormControl(projet ? projet.user : null, [Validators.required]),
      contract: new FormControl(projet ? projet.contract : null, [Validators.min(0)]),
    });

    if (projet) {
      this.projectFormGroup.addControl('id', new FormControl(projet.id));
    }

  }

}
