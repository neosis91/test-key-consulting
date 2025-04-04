import { Component, input } from '@angular/core';
import { NgClass, UpperCasePipe } from '@angular/common';
import { StatusE } from '../../form-projet/form-projet.component';
import { Project } from '../../list.entities';

@Component({
  selector: 'app-pill',
  imports: [UpperCasePipe, NgClass],
  templateUrl: './pill.component.html',
})
export class PillComponent {
  projet = input.required<Project>();
  protected readonly StatusE = StatusE;
}
