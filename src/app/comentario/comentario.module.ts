import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComentarioListComponent } from './comentario-list/comentario-list.component';
import { ComentarioDetailComponent } from './comentario-detail/comentario-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [ComentarioListComponent],
  declarations: [
    ComentarioListComponent,
    ComentarioDetailComponent
  ]
})
export class ComentarioModule { }
