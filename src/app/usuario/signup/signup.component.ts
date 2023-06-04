import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { Usuario } from '../usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public name: string = '';
  public age: number = 0;
  public gender: string = '';
  public email: string = '';

  constructor(private usuarioService: UsuarioService, private router: Router) { } // Inject your service

  ngOnInit() {
  }

  onSubmit() {
    let usuario: Usuario = new Usuario (0, this.name, this.gender, this.age, this.email);

    this.usuarioService.postUsuario(usuario).subscribe(result => {
      alert('Account created successfully!');
      this.router.navigate(['Login']); // This navigates to the homepage
    }, error => {
      alert('Error creating account: ' + error.message);
    });
  }
}
