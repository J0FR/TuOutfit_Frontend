import { Component, OnInit } from '@angular/core';
import { Outfit } from '../outfit';
import { OutfitService } from '../outfit.service';
import { OutfitDetail } from '../outfitDetail';

@Component({
  selector: 'app-outfit-list',
  templateUrl: './outfit-list.component.html',
  styleUrls: ['./outfit-list.component.css']
})
export class OutfitListComponent implements OnInit {

  outfits: Array<OutfitDetail> = [];
  constructor(private outfitService: OutfitService) { }
  selectedOutfit!: OutfitDetail;
  selected = false;

  getOutfits(): void {
    this.outfitService.getOutfits().subscribe((outfits) => {
      this.outfits = outfits;
    });
  }

  onSelected(outfit: OutfitDetail): void {
    this.selected = true;
    this.selectedOutfit = outfit;
  }

  ngOnInit() {
    this.getOutfits();
  }

}
