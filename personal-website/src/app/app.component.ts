import { Component } from '@angular/core';
import {RouterModule, RouterOutlet} from '@angular/router';
import {HomePageComponent} from './home-page/home-page.component';
import {NavbarComponent} from './navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, HomePageComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'personal-website';
}
