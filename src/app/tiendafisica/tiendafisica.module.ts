import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TiendafisicaListComponent } from './tiendafisica-list/tiendafisica-list.component';
import { TiendafisicaDetailComponent } from './tiendafisica-detail/tiendafisica-detail.component';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  imports: [
    CommonModule,
    NgxPaginationModule
  ],
  exports : [TiendafisicaListComponent],
  declarations: [TiendafisicaListComponent, TiendafisicaDetailComponent]
})
export class TiendafisicaModule { }
