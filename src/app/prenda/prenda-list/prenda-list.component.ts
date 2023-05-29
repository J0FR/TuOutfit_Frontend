import { Component, OnInit } from '@angular/core';
import { Prenda } from '../prenda';
import { PrendaService } from '../Prenda.service'
import { PrendaDetail } from '../prenda-detail/PrendaDetail';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prenda-list',
  templateUrl: './prenda-list.component.html',
  styleUrls: ['./prenda-list.component.css']
})
export class PrendaListComponent implements OnInit {
  prendas : Array<PrendaDetail> = [];

  constructor(private PrendaService: PrendaService, private router: Router) { }

  getPrendas(): void {
    this.PrendaService.getPrendas().subscribe((prendas) => {
      this.prendas = prendas;
    });
  }

  onSelected(prenda: PrendaDetail): void {
    this.router.navigate(['/Prendas', prenda.id]);
  }

  ngOnInit() {
    this.getPrendas();
  }

}
