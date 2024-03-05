import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ArticlesComponent } from './components/articles/articles.component';
import { PanierComponent } from './components/panier/panier.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ArticlesComponent, PanierComponent, NavbarComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'kauffmann_kellian_BA3';

  currentComponent = 'articles';

  navigateTo(component: string) {
    console.log(component);
    this.currentComponent = component;
  }
  
}
