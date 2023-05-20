import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioListComponent } from './usuario-list/usuario-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [UsuarioListComponent],
  declarations: [UsuarioListComponent]
})
export class UsuarioModule { }
