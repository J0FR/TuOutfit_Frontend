import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioListComponent } from './usuario-list/usuario-list.component';
import { UsuarioDetailComponent } from './usuario-detail/usuario-detail.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [UsuarioListComponent],
  declarations: [
    UsuarioListComponent,
    UsuarioDetailComponent
  ]
})
export class UsuarioModule { }
