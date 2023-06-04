import { Component } from '@angular/core';
import { UsuarioService } from './usuario/usuario.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'base-project';

  isPanelOpen = false;

  constructor(public authService: UsuarioService) {}

  togglePanel() {
    this.isPanelOpen = !this.isPanelOpen;
  }

  logOut() {
    this.authService.logOut();
  }
}
