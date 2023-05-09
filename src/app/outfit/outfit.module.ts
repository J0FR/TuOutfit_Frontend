import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OutfitListComponent } from './outfit-list/outfit-list.component';
import { OutfitDetailComponent } from './outfit-detail/outfit-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [OutfitListComponent],
  declarations: [OutfitListComponent, OutfitDetailComponent]
})
export class OutfitModule { }
