import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";

import { HomeComponent } from "./components/home/home.component";
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'digimon-app';
  constructor(private themeService: ThemeService) {
    
  document.body.classList.add('dark-mode');
  }

  ngOnInit() {
    const savedMode = localStorage.getItem('darkMode') === 'true';
    if (savedMode) {
      document.body.classList.add('dark-mode');
      this.themeService.toggleDarkMode(); // Aggiorna lo stato
    }
  }
}
