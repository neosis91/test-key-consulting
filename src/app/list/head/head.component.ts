import { Component, input } from '@angular/core';

@Component({
  selector: 'app-head',
  imports: [],
  templateUrl: './head.component.html',
  styleUrl: './head.component.css',
})
export class HeadComponent {
  title = input.required<string>();
  subtitle = input.required<string | undefined>();
}
