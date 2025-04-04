import { Component, input } from '@angular/core';
import { NgClass, UpperCasePipe } from '@angular/common';
import { StatusE } from '../../form-projet/form-projet.component';
import { Projet } from '../../list.entities';

@Component({
  selector: 'app-pill',
  imports: [UpperCasePipe, NgClass],
  templateUrl: './pill.component.html'
})
export class PillComponent {
  projet = input.required<Projet>();
  protected readonly StatusE = StatusE;
}
