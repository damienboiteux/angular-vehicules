import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  template: `
    <header>
      <nav>
        <a routerLink="/">Home</a>
        <a routerLink="/vehicules">Vehicules</a>
      </nav>
  `,
  styles: `
    header {
      background-color: #333;
      color: white;
      padding: 25px;
      }
    nav { 
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 50px;  
    }
    a {
      color: white;
      text-decoration: none;
    }  
    a:hover {
      color: yellow;
    }
      `
})
export class HeaderComponent {

}
