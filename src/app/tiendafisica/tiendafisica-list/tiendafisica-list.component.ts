import { Component, OnInit } from '@angular/core';
import { Tiendafisica } from '../tiendafisica';
import { TiendafisicaService } from '../tiendafisica.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tiendafisica-list',
  templateUrl: './tiendafisica-list.component.html',
  styleUrls: ['./tiendafisica-list.component.css']
})
export class TiendafisicaListComponent implements OnInit {

  tiendasfisicas: Array<Tiendafisica> = [];
  constructor(private tiendafisicaService: TiendafisicaService, private router: Router) { }

  getTiendasFisicas(): void {
    this.tiendafisicaService.getTiendasFisicas().subscribe((tiendasfisicas) => {
      this.tiendasfisicas = tiendasfisicas;
    });
  }

  onSelected(tiendafisica: Tiendafisica): void {
    this.router.navigate(['/Tiendas', tiendafisica.id]);
  }

  ngOnInit() {
    this.getTiendasFisicas();
  }

}
