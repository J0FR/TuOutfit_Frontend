import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrendaListComponent } from './prenda-list/prenda-list.component';
import { PrendaDetailComponent } from './prenda-detail/prenda-detail.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { PrendaComentarioComponent } from './prendaComentario/prendaComentario.component';

@NgModule({
  imports: [
    CommonModule,
    NgxPaginationModule,
    FormsModule
  ],
  exports: [PrendaListComponent, PrendaComentarioComponent],
  declarations: [PrendaListComponent, PrendaDetailComponent, PrendaComentarioComponent]
})
export class PrendaModule { }
