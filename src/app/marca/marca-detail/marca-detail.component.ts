import { Component,Input, OnInit } from '@angular/core';
import { Marca } from '../marca';
import { MarcaDetail } from '../marcaDetail';


@Component({
  selector: 'app-marca-detail',
  templateUrl: './marca-detail.component.html',
  styleUrls: ['./marca-detail.component.css']
})
export class MarcaDetailComponent implements OnInit {

  @Input() marcaDetail!: MarcaDetail;

  constructor() { }

  ngOnInit() {
  }

}
