import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { OutfitService } from '../outfit.service';
import { OutfitDetail } from '../outfitDetail';
import { Router } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { outputAst } from '@angular/compiler';


@Component({
  selector: 'app-outfit-list',
  templateUrl: './outfit-list.component.html',
  styleUrls: ['./outfit-list.component.css']
})
export class OutfitListComponent implements OnInit {

  p:number = 1;
  showFilters = false;

  outfits: Array<OutfitDetail> = [];
  selected: boolean = false;
  constructor(private outfitService: OutfitService, private router: Router) { }

  getOutfits(): void {
    this.outfitService.getOutfits().subscribe((outfits) => {
      this.outfits = outfits;
    });
  }

  selectedGender = 'Genero';
	onSelectedFilterGender(value:string): void {
		this.selectedGender = value;
	}

  selectedAge = 'Edad';
	onSelectedFilterAge(value:string): void {
		this.selectedAge = value;
	}

  selectedOccasion = 'Ocasion';
	onSelectedFilterOcassion(value:string): void {
		this.selectedOccasion = value;
	}

  getNumberOfOutfits(): number {
    return this.outfits.length;
  }

  onSelected(outfit: OutfitDetail): void {
    this.router.navigate(['/Outfits', outfit.id]);
  }

  // @Output()
  // filterGenderListSelectionChanged: EventEmitter<string> = new EventEmitter<string>();

  // @Output()
  // filterAgeListSelectionChanged: EventEmitter<string> = new EventEmitter<string>();

  // @Output()
  // filterOcassionListSelectionChanged: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit() {
    this.getOutfits();
    this.getNumberOfOutfits();
  }


}
