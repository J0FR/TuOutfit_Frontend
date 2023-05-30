import { Component, OnInit } from '@angular/core';
import { OutfitService } from '../outfit.service';
import { OutfitDetail } from '../outfitDetail';
import { Router } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-outfit-list',
  templateUrl: './outfit-list.component.html',
  styleUrls: ['./outfit-list.component.css']
})
export class OutfitListComponent implements OnInit {

  p:number = 1;

  outfits: Array<OutfitDetail> = [];
  selected: boolean = false;
  constructor(private outfitService: OutfitService, private router: Router) { }

  getOutfits(): void {
    this.outfitService.getOutfits().subscribe((outfits) => {
      this.outfits = outfits;
    });
  }

  onSelected(outfit: OutfitDetail): void {
    this.router.navigate(['/Outfits', outfit.id]);
  }

  ngOnInit() {
    this.getOutfits();
  }

}
