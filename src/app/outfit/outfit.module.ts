import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OutfitListComponent } from './outfit-list/outfit-list.component';
import { OutfitDetailComponent } from './outfit-detail/outfit-detail.component';
import { OutfitCreateComponent } from './outfit-create/outfit-create.component';
import { RouterModule, Routes } from '@angular/router';
import {NgxPaginationModule} from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { OutfitComentarioComponent } from './outfitComentario/outfitComentario.component';

@NgModule({
  imports: [
    CommonModule,
    NgxPaginationModule,
    RouterModule,
    FormsModule
  ],
  exports: [
    OutfitListComponent,
    OutfitDetailComponent,
    OutfitCreateComponent,
    OutfitComentarioComponent
  ],
  declarations: [
    OutfitListComponent,
    OutfitDetailComponent,
    OutfitCreateComponent,
    OutfitComentarioComponent
  ]
})
export class OutfitModule { }
