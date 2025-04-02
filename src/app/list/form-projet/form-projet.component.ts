import { Component, input, OnInit } from '@angular/core';
import { GenericInputComponent } from '../../../common/components/generic-input/generic-input.component';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Projet } from '../list.entities';
import { GenericSelectComponent, GenericSelectI } from '../../../common/components/generic-select/generic-select.component';

export interface ProjectI {
  id?: FormControl<number | null>;
  name: FormControl<string | null>;
  user: FormControl<string | null>;
  contract: FormControl<number | null>;
  status: FormControl<string | null>;
}

export enum StatusE {
  PENDING = 'PENDING',
  WORKING = 'WORKING',
  TERMINATE = 'TERMINATE',
}
@Component({
  imports: [GenericInputComponent, ReactiveFormsModule, FormsModule, GenericSelectComponent],
  selector: 'app-form-projet',
  styleUrl: './form-projet.component.css',
  templateUrl: './form-projet.component.html',
})
export class FormProjetComponent implements OnInit {
  projet = input<Projet>();
  projectFormGroup: FormGroup<ProjectI> | undefined;
  status: GenericSelectI[] = [
    { value: StatusE.PENDING, viewValue: 'En attente' },
    { value: StatusE.WORKING, viewValue: 'En cours' },
    { value: StatusE.TERMINATE, viewValue: 'Terminé' },
  ];
  selectedValue: string | undefined = undefined;

  ngOnInit() {
    const projet = this.projet();
    this.projectFormGroup = new FormGroup<ProjectI>({
      name: new FormControl(projet ? projet.name : null, [Validators.required]),
      user: new FormControl(projet ? projet.user : null, [Validators.required]),
      contract: new FormControl(projet ? projet.contract : null, [Validators.min(0)]),
      status: new FormControl(projet ? projet.status : StatusE.PENDING),
    });

    if (projet) {
      this.projectFormGroup.addControl('id', new FormControl(projet.id));
    }
  }
}
