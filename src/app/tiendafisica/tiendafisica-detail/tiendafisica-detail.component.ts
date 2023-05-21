import { Component, Input, OnInit } from '@angular/core';
import { TiendafisicaDetail } from "./TiendafisicaDetail"


@Component({
  selector: 'app-tiendafisica-detail',
  templateUrl: './tiendafisica-detail.component.html',
  styleUrls: ['./tiendafisica-detail.component.css']
})
export class TiendafisicaDetailComponent implements OnInit {

  @Input() tiendafisicaDetail!: TiendafisicaDetail;

  constructor() { }

  ngOnInit() {
  }

}
