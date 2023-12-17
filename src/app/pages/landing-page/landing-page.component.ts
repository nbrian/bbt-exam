import { Component } from '@angular/core';
import { HeadingSectionComponent } from '../../components/landing-page/heading-section/heading-section.component';
import { SubmenuSectionComponent } from '../../components/landing-page/submenu-section/submenu-section.component';
import { ContactUsComponent } from '../../components/landing-page/contact-us/contact-us.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [HeadingSectionComponent, SubmenuSectionComponent, ContactUsComponent, FooterComponent],
  templateUrl: './landing-page.component.html',
})
export class LandingPageComponent {

}
