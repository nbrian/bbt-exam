import { Component } from '@angular/core';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-heading-section',
  standalone: true,
  imports: [MatDividerModule, MatListModule, MatIconModule],
  templateUrl: './heading-section.component.html',
  styleUrl: './heading-section.component.scss'
})
export class HeadingSectionComponent {
  listItem: string[] = [
    'KiwiSaver Home Start grant explained',
    "What's happening in the property market?",
    'Trust law reform',
    "Tax update - Simplification of taxes, foreign ...",
    'What do the new lending rules mean?',
    'How will the Reserve Bank respond to ...'
  ]
}
