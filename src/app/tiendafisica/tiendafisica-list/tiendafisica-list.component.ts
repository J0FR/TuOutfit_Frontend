import { Component, OnInit } from '@angular/core';
import { Tiendafisica } from '../tiendafisica';
import { TiendafisicaService } from '../tiendafisica.service';


@Component({
  selector: 'app-tiendafisica-list',
  templateUrl: './tiendafisica-list.component.html',
  styleUrls: ['./tiendafisica-list.component.css']
})
export class TiendafisicaListComponent implements OnInit {

  tiendasfisicas: Array<Tiendafisica> = [];
  constructor(private tiendafisicaService: TiendafisicaService) { }
  selectedTiendafisica!: Tiendafisica;
  selected = false;

  getTiendasFisicas(): void {
    this.tiendafisicaService.getTiendasFisicas().subscribe((tiendasfisicas) => {
      this.tiendasfisicas = tiendasfisicas;
    });
    console.log(this.tiendasfisicas);
  }

  onSelected(tiendafisica: Tiendafisica): void {
    this.selected = true;
    this.selectedTiendafisica = tiendafisica;
  }

  ngOnInit() {
    this.getTiendasFisicas();
  }

}
