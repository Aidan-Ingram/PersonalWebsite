// src/main.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { Routes, provideRouter } from '@angular/router';
import { HomePageComponent } from './app/home-page/home-page.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {PersonalInfoComponent} from './app/personal-info/personal-info.component';
import {ProjectShowcaseComponent} from './app/project-showcase/project-showcase.component'; // Import the HomePage component

// Define your routes
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },  // Redirect to home
  { path: 'home', component: HomePageComponent },
  { path: 'personal-info', component: PersonalInfoComponent },
  { path: 'project-showcase', component: ProjectShowcaseComponent },
];

// Configure the application with the router
bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes), provideAnimationsAsync(),  // Use provideRouter to set up the routing
  ],
})
  .catch((err) => console.error(err));
