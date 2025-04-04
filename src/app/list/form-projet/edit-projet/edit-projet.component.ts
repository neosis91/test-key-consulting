import { Component, inject } from '@angular/core';
import { FormProjetComponent } from '../form-projet.component';
import { MAT_DIALOG_DATA, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle } from '@angular/material/dialog';
import { MatDivider } from '@angular/material/divider';
import { MatButton } from '@angular/material/button';
import { Project } from '../../list.entities';

@Component({
  selector: 'app-edit-projet',
  imports: [FormProjetComponent, MatDialogTitle, MatDivider, MatDialogActions, MatButton, MatDialogClose, MatDialogContent],
  templateUrl: './edit-projet.component.html',
  styleUrl: './edit-projet.component.css',
})
export class EditProjetComponent {
  readonly data: { projet: Project } = inject(MAT_DIALOG_DATA);
}
