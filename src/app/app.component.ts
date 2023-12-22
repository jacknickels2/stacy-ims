import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, WelcomeComponent, RouterModule],
  styleUrl: './app.component.css',
  template: `
    <main>
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,400italic" />
      </head>
      <div class="nav-container">
        <nav class="navbar">
          <img class="brand-logo" src="/assets/welcome_assets/black_dog_logo.jpg" alt="logo" aria-hidden="true" />

          <ul class="nav-menu">
            <li><a [routerLink]="['/welcome']" class="nav-links">Welcome</a></li>
            <li><a class="nav-links">Inventory</a></li>
            <li><a class="nav-links">Data</a></li>
            <li><a [routerLink]="['/about']" class="nav-links">About</a></li>
          </ul>
        </nav>
      </div>

      <section class="content">
        <router-outlet></router-outlet>
      </section>

      <footer>
        <p>Created by Nicholas Cox for Stacy Collins</p>
        <p>12/20/23 Merry Christmas!</p>
      </footer>
    </main>
  `,
})
export class AppComponent {
  title = 'stacy-ims';
}
