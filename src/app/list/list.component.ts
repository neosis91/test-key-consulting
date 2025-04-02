import { Component, inject } from '@angular/core';
import { MatButton, MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatCard } from '@angular/material/card';
import { ProjetService } from './projet.service';
import { AsyncPipe, NgClass, NgTemplateOutlet } from '@angular/common';
import { MatMenu, MatMenuItem, MatMenuTrigger } from '@angular/material/menu';
import { Projet } from './list.entities';
import { MatDialog } from '@angular/material/dialog';
import { StatusE } from './form-projet/form-projet.component';

@Component({
  selector: 'app-list',
  imports: [MatIcon, MatButton, MatCard, AsyncPipe, MatIconButton, MatMenuTrigger, MatMenu, MatMenuItem, NgTemplateOutlet, NgClass],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  private readonly projetService = inject(ProjetService);
  private readonly dialog: MatDialog = inject(MatDialog);
  $projets = this.projetService.$projets;

  async add() {
    // boite dialogue chargée à la demande (verification dans les sources en mode console avec le navigateur)
    const addProjetComponent = await import('./form-projet/add-projet/add-projet.component').then(c => c.AddProjetComponent);
    this.dialog
      .open(addProjetComponent, {
        panelClass: ['w-full', 'h-full', 'md:w-[532px]', 'md:h-[476px]', 'flex', 'justify-center'],
      })
      .afterClosed()
      .subscribe((project: Projet) => {
        if (project) {
          console.log('projectI: ', project);
          this.projetService.post(project as Projet);
        }
      });
  }

  async edit(projet: Projet) {
    const editProjetComponent = await import('./form-projet/edit-projet/edit-projet.component').then(c => c.EditProjetComponent);
    console.log('projet edit: ', projet);
    this.dialog
      .open(editProjetComponent, {
        panelClass: ['w-full', 'h-full', 'md:w-[532px]', 'md:h-[476px]', 'flex', 'justify-center'],
        data: {
          projet: projet,
        },
      })
      .afterClosed()
      .subscribe((project: Projet) => {
        if (project) {
          console.log('projectI: ', project);
          this.projetService.put(project as Projet);
        }
      });
  }

  delete(projet: Projet) {
    this.projetService.delete(projet.id);
  }

  protected readonly StatusE = StatusE;
}
