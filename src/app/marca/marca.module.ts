import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarcaListComponent } from './marca-list/marca-list.component';
import { MarcaDetailComponent } from './marca-detail/marca-detail.component';
@NgModule({
  imports: [
    CommonModule
  ],
  exports: [MarcaListComponent],
  declarations: [MarcaListComponent, MarcaDetailComponent]
})
export class MarcaModule { }
/*Archivo: src\app\marca\marca.module.ts*/
