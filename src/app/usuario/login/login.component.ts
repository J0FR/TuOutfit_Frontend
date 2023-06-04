import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario';
import { UsuarioService } from '../usuario.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public email: string = '';
  localStorage: Storage;

  constructor(private usuarioService: UsuarioService, private router: Router) {
    this.localStorage = window.localStorage;
  }

  usuarios: Array<Usuario> = [];

  getUsuarios(): void {
    this.usuarioService.getUsuarios().subscribe((usuarios) => {
      this.usuarios = usuarios;
    });
  }

  userExists(email: string): boolean {
    for (let i = 0; i < this.usuarios.length; i++) {
      if (this.usuarios[i].email == email) {
        localStorage.setItem('idUsuario', this.usuarios[i].id.toString());
        return true;
      }
    }
    return false;
  }

  onSubmit(form: NgForm) {
    this.getUsuarios();
    if (this.userExists(this.email)) {
      this.router.navigate(['/']);
      this.usuarioService.isAuth = true;
      alert("Logged in successfully!");
    } else {
      alert("Error: user does not exist.");
    }
  }

  ngOnInit() {
    this.getUsuarios();
  }
}
