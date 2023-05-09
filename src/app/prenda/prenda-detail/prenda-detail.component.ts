import { Component, Input ,OnInit } from '@angular/core';
import { Prenda } from '../prenda';
import { PrendaDetail } from './PrendaDetail';

@Component({
  selector: 'app-prenda-detail',
  templateUrl: './prenda-detail.component.html',
  styleUrls: ['./prenda-detail.component.css']
})
export class PrendaDetailComponent implements OnInit {

  @Input() prendaDetail!: PrendaDetail;

  constructor() { }

  ngOnInit() {
  }

}
