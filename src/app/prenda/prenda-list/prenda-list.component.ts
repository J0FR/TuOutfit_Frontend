import { Component, OnInit } from '@angular/core';
import { Prenda } from '../prenda';
import { PrendaService } from '../Prenda.service'
import { PrendaDetail } from '../prenda-detail/PrendaDetail';

@Component({
  selector: 'app-prenda-list',
  templateUrl: './prenda-list.component.html',
  styleUrls: ['./prenda-list.component.css']
})
export class PrendaListComponent implements OnInit {
  prendas : Array<PrendaDetail> = [];
  selectedPrenda!: PrendaDetail;
  selected = false;

  constructor(private PrendaService: PrendaService) { }

  getPrendas(): void {
    this.PrendaService.getPrendas().subscribe((prendas) => {
      this.prendas = prendas;
    });
  }

  onSelected(prenda: PrendaDetail): void {
    this.selected = true;
    this.selectedPrenda = prenda;
  }

  ngOnInit() {
    this.getPrendas();
  }

}
