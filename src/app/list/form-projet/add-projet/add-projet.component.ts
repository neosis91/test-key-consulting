import {Component, inject} from '@angular/core';
import {FormProjetComponent} from '../form-projet.component';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle
} from '@angular/material/dialog';
import {MatDivider} from '@angular/material/divider';
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'app-add-projet',
  imports: [
    FormProjetComponent,
    MatDialogTitle,
    MatDivider,
    MatDialogActions,
    MatButton,
    MatDialogClose,
    MatDialogContent
  ],
  templateUrl: './add-projet.component.html',
  styleUrl: './add-projet.component.css'
})
export class AddProjetComponent {
  data = inject(MAT_DIALOG_DATA);

}
