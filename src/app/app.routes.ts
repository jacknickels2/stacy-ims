import { Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
  {
    path: '',
    component: WelcomeComponent,
    title: 'Stacy IMS: Welcome Page',
  },
  {
    path: 'welcome',
    component: WelcomeComponent,
    title: 'Stacy IMS: Welcome Page',
  },
  {
    path: 'about',
    component: AboutComponent,
    title: 'Stacy IMS: About Us',
  },
];
