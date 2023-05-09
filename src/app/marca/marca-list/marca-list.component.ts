import { Component, OnInit } from '@angular/core';
import { Marca } from '../marca';
import { MarcaService } from '../marca.service';

@Component({
  selector: 'app-marca-list',
  templateUrl: './marca-list.component.html',
  styleUrls: ['./marca-list.component.css']
})
export class MarcaListComponent implements OnInit {

  marcas: Array<Marca> = [];
  constructor(private marcaService: MarcaService) { }
  selectedMarca!: Marca;
  selected = false;
  getMarcas(): void {
    this.marcaService.getMarcas().subscribe((marcas) => {
      this.marcas = marcas;
  });
  }

  onSelected(marca: Marca): void {
    this.selected = true;
    this.selectedMarca = marca;
  }

  ngOnInit(): void {
    this.getMarcas();
  }

}
