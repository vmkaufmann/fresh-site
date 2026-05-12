import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { LearnMore } from './pages/learn-more/learn-more';
import { Pricing } from './pages/pricing/pricing';
import { Calendar } from './pages/calendar/calendar';

export const routes: Routes = [
  { path: '', component: Home, pathMatch: 'full' },
  { path: 'learn-more', component: LearnMore },
  { path: 'pricing', component: Pricing },
  { path: 'calendar', component: Calendar },
  { path: '**', redirectTo: '' },
];
