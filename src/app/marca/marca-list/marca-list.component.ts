import { Component, OnInit } from '@angular/core';
import { Marca } from '../marca';
import { MarcaService } from '../marca.service';
import { MarcaDetail } from '../marcaDetail';
import { Router } from '@angular/router';

@Component({
  selector: 'app-marca-list',
  templateUrl: './marca-list.component.html',
  styleUrls: ['./marca-list.component.css']
})
export class MarcaListComponent implements OnInit {

  marcas: Array<MarcaDetail> = [];
  selected: boolean = false;
  constructor(private marcaService: MarcaService, private router: Router) { }

  getMarcas(): void {
    this.marcaService.getMarcas().subscribe((marcas) => {
      this.marcas = marcas;
    });
  }

  onSelected(marca: MarcaDetail): void {
    this.router.navigate(['/Marcas', marca.id]);
  }

  ngOnInit(): void {
    this.getMarcas();
  }

}
