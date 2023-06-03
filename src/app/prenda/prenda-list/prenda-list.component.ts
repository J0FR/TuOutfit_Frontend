import { Component, OnInit } from '@angular/core';
import { Prenda } from '../prenda';
import { PrendaService } from '../Prenda.service'
import { PrendaDetail } from '../prenda-detail/PrendaDetail';
import { Router } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { outputAst } from '@angular/compiler';

@Component({
  selector: 'app-prenda-list',
  templateUrl: './prenda-list.component.html',
  styleUrls: ['./prenda-list.component.css']
})
export class PrendaListComponent implements OnInit {
  prendas : Array<PrendaDetail> = [];
  selected: boolean = false;
  p:number = 1;

  showFilters = false;
  constructor(private PrendaService: PrendaService, private router: Router) { }

  getPrendas(): void {
    this.PrendaService.getPrendas().subscribe((prendas) => {
      this.prendas = prendas;
    });
  }

  selectedColor = 'Color';
  onSelectedFilterColor(value:string): void {
    this.selectedColor = value;
  }

  selectedGender = 'Genero';
  onSelectedFilterGender(value:string): void {
    this.selectedGender = value;
  }

  selectedOccasion = 'Ocasion';
  onSelectedFilterOcassion(value:string): void {
    this.selectedOccasion = value;
  }

  getNumberOfPrendas(): number {
    return this.prendas.length;
  }



  onSelected(prenda: PrendaDetail): void {
    this.router.navigate(['/Prendas', prenda.id]);
  }

  ngOnInit() {
    this.getPrendas();
  }

}
