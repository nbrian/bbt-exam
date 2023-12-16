import { Component } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-submenu-section',
  standalone: true,
  imports: [MatTabsModule, MatButtonModule, MatIconModule],
  templateUrl: './submenu-section.component.html',
  styleUrl: './submenu-section.component.scss'
})
export class SubmenuSectionComponent {
  submenu: string[] = [
    "Book keeping & payroll",
    "Financial & GST",
    "KiwiSaver advice ",
    "Insuring people",
    "Tax & business advice",
    "Trustee services",
    "Mortgage advice",
  ]
}
