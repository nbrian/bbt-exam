import { Component } from '@angular/core';
import { ContactUsFormComponent } from '../contact-us-form/contact-us-form.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [ContactUsFormComponent, MatDividerModule, MatListModule, MatIconModule],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss'
})
export class ContactUsComponent {
  contactUsLinks: {icon: string, value: string}[] = [
    {icon: 'location_on', value: 'Find an adviser'},
    {icon: 'forum', value: 'Talk to an accountant'},
    {icon: 'home', value: 'Talk to a mortgage broker'},
    {icon: 'call', value: '0800 700 699'},
    {icon: 'mail', value: 'reception@havenadvisers.co.nz'},
    {icon: 'facebook', value: 'Be a part of our Facebook community'},
  ]
}
