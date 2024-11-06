// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { ProjectShowcaseComponent } from './project-showcase/project-showcase.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'personal-info', component: PersonalInfoComponent },
  { path: 'project-showcase', component: ProjectShowcaseComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
