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

  getMarcas(): void {
    this.marcaService.getMarcas().subscribe((marcas) => {
      this.marcas = marcas;
  });
  }

  ngOnInit(): void {
    this.getMarcas();
  }

}
