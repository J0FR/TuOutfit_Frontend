import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OutfitListComponent } from './outfit-list/outfit-list.component';
import { OutfitDetailComponent } from './outfit-detail/outfit-detail.component';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  imports: [
    CommonModule,
    NgxPaginationModule
  ],
  exports: [OutfitListComponent],
  declarations: [OutfitListComponent, OutfitDetailComponent]
})
export class OutfitModule { }
