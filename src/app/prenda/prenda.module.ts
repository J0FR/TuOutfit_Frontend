import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrendaListComponent } from './prenda-list/prenda-list.component';


@NgModule({
  imports: [
    CommonModule
  ],
  exports: [PrendaListComponent],
  declarations: [PrendaListComponent]
})
export class PrendaModule { }
