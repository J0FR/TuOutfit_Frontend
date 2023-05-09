import { Component, OnInit } from '@angular/core';
import { Prenda } from '../prenda';
import { PrendaService } from '../Prenda.service'

@Component({
  selector: 'app-prenda-list',
  templateUrl: './prenda-list.component.html',
  styleUrls: ['./prenda-list.component.css']
})
export class PrendaListComponent implements OnInit {
  prendas : Array<Prenda> = [];
  selectedPrenda!: Prenda;
  selected = false;

  constructor(private PrendaService: PrendaService) { }

  getPrendas(): void {
    this.PrendaService.getPrendas().subscribe((prendas) => {
      this.prendas = prendas;
    });
  }

  onSelected(prenda: Prenda): void {
    this.selected = true;
    this.selectedPrenda = prenda;
  }

  ngOnInit() {
    this.getPrendas();
  }

}
