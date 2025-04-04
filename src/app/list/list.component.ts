import { Component, inject } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { ProjetService } from './projet.service';
import { AsyncPipe } from '@angular/common';
import { MatMenu, MatMenuContent, MatMenuItem } from '@angular/material/menu';
import { Project } from './list.entities';
import { MatDialog } from '@angular/material/dialog';
import { StatusE } from './form-projet/form-projet.component';
import { ItemComponent } from './item/item.component';
import { HeadComponent } from './head/head.component';

@Component({
  selector: 'app-list',
  imports: [MatIcon, MatButton, AsyncPipe, MatMenu, MatMenuItem, MatMenuContent, ItemComponent, HeadComponent],
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
      .subscribe((project: Project) => {
        if (project) {
          console.log('projectI: ', project);
          this.projetService.post(project as Project);
        }
      });
  }

  async edit(projet: Project) {
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
      .subscribe((project: Project) => {
        if (project) {
          console.log('projectI: ', project);
          this.projetService.put(project as Project);
        }
      });
  }

  delete(projet: Project) {
    this.projetService.delete(projet.id);
  }

  protected readonly StatusE = StatusE;
}
