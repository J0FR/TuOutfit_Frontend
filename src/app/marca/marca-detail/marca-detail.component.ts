import { Component,Input, OnInit } from '@angular/core';
import { Marca } from '../marca';


@Component({
  selector: 'app-marca-detail',
  templateUrl: './marca-detail.component.html',
  styleUrls: ['./marca-detail.component.css']
})
export class MarcaDetailComponent implements OnInit {

  @Input() marcaDetail!: Marca;

  constructor() { }

  ngOnInit() {
  }

}
