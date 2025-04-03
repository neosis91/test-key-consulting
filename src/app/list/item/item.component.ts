import { Component, input } from '@angular/core';
import { Projet } from '../list.entities';
import { MatCard } from '@angular/material/card';
import { StatusE } from '../form-projet/form-projet.component';
import { MatMenuPanel, MatMenuTrigger } from '@angular/material/menu';
import { MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { PillComponent } from './pill/pill.component';
import { SvgIconComponent } from 'angular-svg-icon';

@Component({
  selector: 'app-item',
  imports: [MatCard, MatIconButton, MatMenuTrigger, MatIcon, PillComponent, SvgIconComponent],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css',
})
export class ItemComponent {
  item = input.required<Projet>();
  protected readonly StatusE = StatusE;
  matMenuPanel = input<MatMenuPanel | null>(null);
}
