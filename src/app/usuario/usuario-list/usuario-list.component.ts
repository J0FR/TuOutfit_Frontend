import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario';
import { UsuarioService } from '../usuario.service';
import { UsuarioDetail } from '../usuario-detail';

@Component({
  selector: 'app-usuario-list',
  templateUrl: './usuario-list.component.html',
  styleUrls: ['./usuario-list.component.css']
})
export class UsuarioListComponent implements OnInit {

  usuarios: Array<Usuario> = [];
  selected: Boolean = false;
  selectedUsuario!: UsuarioDetail;

  constructor(private usuarioService: UsuarioService) { }

  getUsuarios(): void {
    this.usuarioService.getUsuarios().subscribe((usuarios) => {
      this.usuarios = usuarios;
    });
  }

  onSelected(usuario: UsuarioDetail): void {
    this.selected = true;
    this.selectedUsuario = usuario;
  }

  ngOnInit(): void {
    this.getUsuarios();
  }

}
