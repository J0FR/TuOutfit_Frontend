import { Component, Input, OnInit } from '@angular/core';
import { Outfit } from '../outfit';

@Component({
  selector: 'app-outfit-detail',
  templateUrl: './outfit-detail.component.html',
  styleUrls: ['./outfit-detail.component.css']
})
export class OutfitDetailComponent implements OnInit {

  @Input() outfitDetail!: Outfit;

  constructor() { }

  ngOnInit() {
  }

}
