import { Component, input } from '@angular/core';
import { Projet } from '../list.entities';
import { MatCard } from '@angular/material/card';
import { StatusE } from '../form-projet/form-projet.component';
import { NgClass, UpperCasePipe } from '@angular/common';
import { MatMenuPanel, MatMenuTrigger } from '@angular/material/menu';
import { MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-item',
  imports: [MatCard, NgClass, UpperCasePipe, MatIconButton, MatMenuTrigger, MatIcon],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css',
})
export class ItemComponent {
  item = input.required<Projet>();
  protected readonly StatusE = StatusE;
  matMenuPanel = input<MatMenuPanel | null>(null);
}
