import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrendaListComponent } from './prenda-list/prenda-list.component';
import { PrendaDetailComponent } from './prenda-detail/prenda-detail.component';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  imports: [
    CommonModule,
    NgxPaginationModule
  ],
  exports: [PrendaListComponent],
  declarations: [PrendaListComponent, PrendaDetailComponent]
})
export class PrendaModule { }
