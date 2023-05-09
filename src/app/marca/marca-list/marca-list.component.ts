import { Component, OnInit } from '@angular/core';
import { Marca } from '../marca';
import { MarcaService } from '../marca.service';
import { MarcaDetail } from '../marcaDetail';

@Component({
  selector: 'app-marca-list',
  templateUrl: './marca-list.component.html',
  styleUrls: ['./marca-list.component.css']
})
export class MarcaListComponent implements OnInit {

  marcas: Array<MarcaDetail> = [];
  constructor(private marcaService: MarcaService) { }
  selectedMarca!: MarcaDetail;
  selected = false;
  getMarcas(): void {
    this.marcaService.getMarcas().subscribe((marcas) => {
      this.marcas = marcas;
  });
  }

  onSelected(marca: MarcaDetail): void {
    this.selected = true;
    this.selectedMarca = marca;
  }

  ngOnInit(): void {
    this.getMarcas();
  }

}
