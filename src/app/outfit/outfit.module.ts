import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OutfitListComponent } from './outfit-list/outfit-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [OutfitListComponent],
  declarations: [OutfitListComponent]
})
export class OutfitModule { }
