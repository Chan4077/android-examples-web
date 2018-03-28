import { HomeComponent } from './home/home.component';
import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Route } from '@angular/router';

const APP_ROUTES: Route[] = [
	{ path: 'home', component: HomeComponent },
	{ path: '**', redirectTo: '/home' }
];

export const AppRouting: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
