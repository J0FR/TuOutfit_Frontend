import { Component, OnInit } from '@angular/core';
import { Outfit } from '../outfit';
import { OutfitService } from '../outfit.service';

@Component({
  selector: 'app-outfit-list',
  templateUrl: './outfit-list.component.html',
  styleUrls: ['./outfit-list.component.css']
})
export class OutfitListComponent implements OnInit {

  outfits: Array<Outfit> = [];
  constructor(private outfitService: OutfitService) { }

  getOutfits(): void {
    this.outfitService.getOutfits().subscribe((outfits) => {
      this.outfits = outfits;
    });
  }

  ngOnInit() {
    this.getOutfits();
  }

}
