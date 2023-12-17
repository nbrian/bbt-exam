import { Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';

export const routes: Routes = [
    {path: '', redirectTo: '/haven', pathMatch: 'full'},
    {path: 'haven', title: 'haven', component: LandingPageComponent},
    {path: 'registration', title: 'Registration', component: RegistrationComponent},
    {path: 'welcome', title: 'Welcome', component: WelcomeComponent},
    {path: 'welcome/:id', title: 'Welcome', component: WelcomeComponent}
];
