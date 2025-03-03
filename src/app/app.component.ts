import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { routes } from './app.routes';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatTabsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  currentRoute: string = '';
  get links() {
    return routes?.map(route => route.path).filter(path => !!path)
  }

  constructor(private router: Router) {
    // Escuta eventos de navegação para atualizar a rota ativa
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.urlAfterRedirects.replace("/", "");
      }
    });
  }

  navigate(link: any) {
    this.router.navigate([link])
  }
}
