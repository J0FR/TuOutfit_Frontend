import { Component, Input, OnInit } from '@angular/core';
import { Outfit } from '../outfit';
import { OutfitDetail } from '../outfitDetail';
import { ActivatedRoute } from '@angular/router';
import { OutfitService } from '../outfit.service';

@Component({
  selector: 'app-outfit-detail',
  templateUrl: './outfit-detail.component.html',
  styleUrls: ['./outfit-detail.component.css']
})
export class OutfitDetailComponent implements OnInit {

  @Input() outfitDetail!: OutfitDetail;

  constructor(private route: ActivatedRoute, private outfitService: OutfitService) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.outfitService.getOutfitsById(+id).subscribe((outfitDetail) => {
        this.outfitDetail = outfitDetail;
      });
    }
  }



}
