import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TiendafisicaListComponent } from './tiendafisica-list/tiendafisica-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports : [TiendafisicaListComponent],
  declarations: [TiendafisicaListComponent]
})
export class TiendafisicaModule { }
