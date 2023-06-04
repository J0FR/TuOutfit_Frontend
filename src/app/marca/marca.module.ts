import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MarcaListComponent } from './marca-list/marca-list.component';
import { MarcaDetailComponent } from './marca-detail/marca-detail.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { TiendafisicaModule } from '../tiendafisica/tiendafisica.module';

@NgModule({
  imports: [
    CommonModule,
    NgxPaginationModule,
    TiendafisicaModule,
    FormsModule
  ],
  exports: [MarcaListComponent],
  declarations: [MarcaListComponent, MarcaDetailComponent]
})
export class MarcaModule { }
/*Archivo: src\app\marca\marca.module.ts*/
