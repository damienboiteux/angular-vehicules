import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  template: `
    <app-header />
      <h1>Welcome to {{title}}!</h1>
      <router-outlet />
    <app-footer />
  `,
  styles: `

    `,
})
export class AppComponent {
  title = 'vehicules';
}
